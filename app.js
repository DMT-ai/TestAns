// Game Initialization
let selectedQuestions = [];
let currentQIndex = 0;
let score = 0;
let currentPhase = 1; // 1: Select DISC, 2: Select Response
let selectedDISC = null;
let currentQuestionMap = null;

// Lifelines state
let lifelines = {
    "ll-5050": { count: 1, active: false },
    "ll-hint": { count: 1, active: false },
    "ll-skip": { count: 1, active: false }
};

// Timer state
let timerInterval = null;
let timeLeft = 0;

let correctCount = 0;

// DOM Elements
const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const endScreen = document.getElementById("end-screen");
const phase1 = document.getElementById("phase-1");
const phase2 = document.getElementById("phase-2");
const scenarioText = document.getElementById("scenario-text");
const discOptionsContainer = document.getElementById("disc-options-container");
const responseOptionsContainer = document.getElementById("response-options-container");
const feedbackModal = document.getElementById("feedback-modal");

// Setup event listeners
document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("next-q-btn").addEventListener("click", nextQuestion);
document.getElementById("restart-btn").addEventListener("click", startGame);

document.querySelectorAll(".disc-btn").forEach(btn => {
    btn.addEventListener("click", (e) => handleDiscSelection(e.currentTarget.dataset.type));
});

document.querySelectorAll(".lifeline-btn").forEach(btn => {
    btn.addEventListener("click", (e) => handleLifeline(e.currentTarget.id));
});

function shuffleArray(array) {
    let curId = array.length;
    while (0 !== curId) {
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

function selectGameQuestions() {
    // 6 Dễ, 4 Trung bình, 5 Khó
    const easyPool = questionBank.filter(q => q.difficulty === 'easy');
    const mediumPool = questionBank.filter(q => q.difficulty === 'medium');
    const hardPool = questionBank.filter(q => q.difficulty === 'hard');

    let history = JSON.parse(localStorage.getItem('discGameHistory') || '[]');
    let currentPlayCount = parseInt(localStorage.getItem('discPlayCount') || '0');
    
    // Increment play count
    currentPlayCount++;
    localStorage.setItem('discPlayCount', currentPlayCount);
    
    // Pick questions based on rules
    const targetEasy = 6;
    const targetMedium = 4;
    const targetHard = 5;
    
    // Check if we should apply the 50% reuse rule (within 5 plays)
    // Rule: over 5 play logic -> if history has items, there's a 50% chance a question is pulled from history pool instead of being entirely fresh.
    // If it's been more than 5 plays, we reset history to keep things fresh.
    if (currentPlayCount > 5) {
        history = [];
        currentPlayCount = 1;
        localStorage.setItem('discPlayCount', 1);
    }
    
    const historicalIds = new Set(history);

    function pickQuestions(pool, targetCount) {
        const poolShuffled = shuffleArray([...pool]);
        const selected = [];
        
        for (let q of poolShuffled) {
            if (selected.length >= targetCount) break;
            
            // 50% chance to force an include if it's in history, OR if history is empty just pick it
            if (historicalIds.has(q.id)) {
                // It's a historical question, 50% chance to reuse it
                if (Math.random() > 0.5) {
                    selected.push(q);
                }
            } else {
                // It's a fresh question
                selected.push(q);
            }
        }
        
        // Fill the rest if we rejected too many historical questions
        let fallbackIndex = 0;
        while (selected.length < targetCount && fallbackIndex < poolShuffled.length) {
            const q = poolShuffled[fallbackIndex];
            if (!selected.includes(q)) {
                selected.push(q);
            }
            fallbackIndex++;
        }
        
        return selected;
    }

    const easyQ = pickQuestions(easyPool, targetEasy);
    const mediumQ = pickQuestions(mediumPool, targetMedium);
    const hardQ = pickQuestions(hardPool, targetHard);
    
    // Combine and sort by difficulty progression
    let finalSelection = [...easyQ, ...mediumQ, ...hardQ];
    const orderMap = { 'easy': 1, 'medium': 2, 'hard': 3 };
    finalSelection.sort((a,b) => orderMap[a.difficulty] - orderMap[b.difficulty]);

    // Update history for next run
    const newHistoryIds = finalSelection.map(q => q.id);
    localStorage.setItem('discGameHistory', JSON.stringify(newHistoryIds));

    return finalSelection;
}

function startGame() {
    selectedQuestions = selectGameQuestions();
    currentQIndex = 0;
    score = 0;
    correctCount = 0;
    resetLifelines();
    
    startScreen.classList.remove("active");
    endScreen.classList.remove("active");
    gameScreen.classList.add("active");
    
    loadQuestion();
}

function resetLifelines() {
    lifelines = {
        "ll-5050": { count: 1, active: false },
        "ll-hint": { count: 1, active: false },
        "ll-skip": { count: 1, active: false }
    };
    updateLifelineUI();
}

function updateLifelineUI() {
    for (const [id, data] of Object.entries(lifelines)) {
        const btn = document.getElementById(id);
        const countSpan = document.getElementById(`count-${id.replace('ll-','')}`);
        countSpan.innerText = data.count;
        if (data.count === 0) {
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    }
}

function loadQuestion() {
    if (currentQIndex >= selectedQuestions.length) {
        endGame();
        return;
    }
    
    currentQuestionMap = selectedQuestions[currentQIndex];
    currentPhase = 1;
    selectedDISC = null;
    
    // UI Update
    document.getElementById("score").innerText = score;
    document.getElementById("question-progress").innerText = `${currentQIndex + 1}/15`;
    
    // Difficulty badge
    const badge = document.getElementById("difficulty-badge");
    if(currentQuestionMap.difficulty === 'easy') { badge.innerText = "Dễ"; badge.style.color = "var(--success)"; }
    else if(currentQuestionMap.difficulty === 'medium') { badge.innerText = "Trung Bình"; badge.style.color = "var(--warning)"; }
    else { badge.innerText = "Khó"; badge.style.color = "var(--danger)"; }
    
    // Reset Phases
    phase1.classList.add("active");
    phase2.classList.remove("active");
    scenarioText.innerText = currentQuestionMap.scenario;
    feedbackModal.classList.add("hidden");
    
    // Start Timer
    startTimer();
    
    // Reset DISC options
    document.querySelectorAll(".disc-btn").forEach(btn => {
        btn.classList.remove("selected", "hidden-ll");
        btn.disabled = false;
    });
}

function handleDiscSelection(type) {
    selectedDISC = type;
    document.querySelectorAll(".disc-btn").forEach(btn => {
        btn.classList.remove("selected");
        if(btn.dataset.type === type) btn.classList.add("selected");
    });
    
    // Give a minor delay before moving to Phase 2 for smooth UX
    setTimeout(() => {
        setupPhase2();
    }, 400);
}

function setupPhase2() {
    currentPhase = 2; // FIX: Update internal state to 2
    phase1.classList.remove("active");
    phase2.classList.add("active");
    
    responseOptionsContainer.innerHTML = '';
    
    // Shuffle responses to prevent predictable patterns
    let responses = [...currentQuestionMap.responses];
    responses = shuffleArray(responses);
    
    responses.forEach(resp => {
        const btn = document.createElement("button");
        btn.className = "option-btn response-btn";
        btn.innerHTML = `<i class="fa-regular fa-comment"></i> ${resp.text}`;
        btn.dataset.id = resp.id;
        btn.dataset.correct = resp.isCorrect;
        
        btn.addEventListener("click", () => handleResponseSelection(resp));
        responseOptionsContainer.appendChild(btn);
    });
}

function handleResponseSelection(responseObj) {
    clearInterval(timerInterval); // Stop timer when answered
    
    // Determine right/wrong
    const isDiscCorrect = selectedDISC === currentQuestionMap.correctDisc;
    const isResponseCorrect = responseObj ? responseObj.isCorrect : false; // Handle timeout
    
    showFeedback(isDiscCorrect, isResponseCorrect, responseObj);
}

function showFeedback(discCorrect, respCorrect, selectedResp) {
    const modalIcon = document.getElementById("feedback-icon");
    const title = document.getElementById("feedback-title");
    const dRes = document.getElementById("feedback-disc-res");
    const rRes = document.getElementById("feedback-reply-res");
    
    const explDiscText = document.getElementById("expl-disc");
    const explRespText = document.getElementById("expl-response");
    const explWrongBox = document.getElementById("expl-wrong-box");
    const explWrongText = document.getElementById("expl-wrong");
    const reactionContainer = document.getElementById("reaction-container");

    const correctReactions = ["🐱💐", "🐶🎁"];
    const wrongReactions = ["😡", "🙍‍♂️💧", "👶😭"];
    
    // Adjust Icon & Title
    modalIcon.className = "modal-icon"; // reset
    reactionContainer.innerHTML = "";
    reactionContainer.className = "reaction-container hidden";
    
    if (discCorrect && respCorrect) {
        modalIcon.classList.add("success");
        modalIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        title.innerText = "Tuyệt Vời!";
        title.style.color = "var(--success)";
        score += 100; // Calculate score
        correctCount++;

        // Confetti effect
        if (typeof confetti === 'function') {
            confetti({
                particleCount: 150,
                spread: 90,
                origin: { y: 0.6 }
            });
        }

        // Show random correct emoji reaction
        const rand = correctReactions[Math.floor(Math.random() * correctReactions.length)];
        reactionContainer.innerHTML = `<div class="reaction-emoji pop-bounce">${rand}</div>`;
        reactionContainer.classList.remove("hidden");
        
    } else if (discCorrect || respCorrect) {
        modalIcon.classList.add("warning");
        modalIcon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>';
        title.innerText = "Gần Đúng Rồi!";
        title.style.color = "var(--warning)";
        score += 30; // Partial score
        
        // Show random wrong emoji reaction
        const rand = wrongReactions[Math.floor(Math.random() * wrongReactions.length)];
        reactionContainer.innerHTML = `<div class="reaction-emoji shake">${rand}</div>`;
        reactionContainer.classList.remove("hidden");
    } else {
        modalIcon.classList.add("error");
        modalIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        title.innerText = "Rất Tiếc!";
        title.style.color = "var(--danger)";
        
        // Show random wrong emoji reaction
        const rand = wrongReactions[Math.floor(Math.random() * wrongReactions.length)];
        reactionContainer.innerHTML = `<div class="reaction-emoji shake">${rand}</div>`;
        reactionContainer.classList.remove("hidden");
    }
    
    // DISC Result formatting
    dRes.innerText = selectedDISC ? (discCorrect ? `Đúng (Nhóm ${selectedDISC})` : `Sai (Chọn ${selectedDISC})`) : "Hết giờ (Chưa chọn)";
    dRes.className = discCorrect ? "correct" : "wrong";
    
    rRes.innerText = respCorrect ? "Phản hồi chuẩn xác" : "Phản hồi chưa tối ưu";
    rRes.className = respCorrect ? "correct" : "wrong";
    
    // Explanations
    document.getElementById("correct-disc").innerText = currentQuestionMap.correctDisc;
    explDiscText.innerText = currentQuestionMap.explanation.disc;
    explRespText.innerText = currentQuestionMap.explanation.response;
    
    if (!respCorrect && selectedResp) {
        explWrongBox.classList.remove("hidden");
        explWrongText.innerText = currentQuestionMap.explanation.wrongResponses[selectedResp.id] || "Cách xử lý này sẽ làm tình huống xấu đi hoặc hỏng mối quan hệ.";
    } else if (!discCorrect) {
        explWrongBox.classList.remove("hidden");
        explWrongText.innerText = `Bạn đã nhận diện sai nhóm tính cách. Khách hàng này thực chất là nhóm ${currentQuestionMap.correctDisc}.`;
    } else {
        explWrongBox.classList.add("hidden");
    }
    
    feedbackModal.classList.remove("hidden");
    document.getElementById("score").innerText = score; // Update UI score early
}

function nextQuestion() {
    currentQIndex++;
    loadQuestion();
}

function endGame() {
    feedbackModal.classList.add("hidden"); // Fix: Hide modal when game ends
    gameScreen.classList.remove("active");
    endScreen.classList.add("active");
    
    document.getElementById("final-score").innerText = score;
    document.getElementById("correct-count").innerText = correctCount;
    
    const evalText = document.getElementById("evaluation-text");
    if(correctCount === 15) evalText.innerText = "Hoàn hảo! Bạn là bậc thầy giao tiếp!";
    else if(correctCount >= 10) evalText.innerText = "Rất tốt! Bạn xử lý tình huống khá khéo léo.";
    else if(correctCount >= 5) evalText.innerText = "Làm tốt! Nhưng cần ôn luyện thêm về DISC.";
    else evalText.innerText = "Đừng nản chí! Hãy chơi lại để thuộc lòng mô hình DISC nhé.";
}

// Lifeline Logic
function handleLifeline(type) {
    if (lifelines[type].count <= 0) return;
    
    if (type === "ll-5050") {
        if (currentPhase !== 2) {
            showToast("50/50 chỉ dùng được khi ở Bước 2: Chọn Phản Hồi!");
            return;
        }
        use5050();
    } 
    else if (type === "ll-hint") {
        showToast("GỢI Ý: " + currentQuestionMap.explanation.disc);
    }
    else if (type === "ll-skip") {
        clearInterval(timerInterval);
        useSkip();
    }
    
    lifelines[type].count--;
    updateLifelineUI();
}

function use5050() {
    let btns = Array.from(document.querySelectorAll(".response-btn"));
    let wrongBtns = btns.filter(btn => btn.dataset.correct === "false");
    
    // randomly pick 2 wrong to hide
    wrongBtns = shuffleArray(wrongBtns);
    if(wrongBtns[0]) wrongBtns[0].style.display = "none";
    if(wrongBtns[1]) wrongBtns[1].style.display = "none";
    
    showToast("Đã loại bỏ 2 phương án sai!");
}

function useSkip() {
    showToast("Đã bỏ qua câu hỏi này!");
    setTimeout(() => {
        nextQuestion();
    }, 1500);
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    toast.innerText = msg;
    toast.classList.remove("hidden");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

// Timer functionality
function startTimer() {
    clearInterval(timerInterval);
    
    // 20s for questions 1-9 (currentQIndex 0-8)
    // 10s for questions 10-15 (currentQIndex 9-14)
    if (currentQIndex < 9) {
        timeLeft = 20;
    } else {
        timeLeft = 10;
    }
    
    updateTimerUI();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeOut();
        }
    }, 1000);
}

function updateTimerUI() {
    const timerDisplay = document.getElementById("time-left");
    if (timerDisplay) {
        timerDisplay.innerText = timeLeft;
        if (timeLeft <= 5) {
            timerDisplay.parentElement.classList.add("danger-text", "shake-infinite");
        } else {
            timerDisplay.parentElement.classList.remove("danger-text", "shake-infinite");
        }
    }
}

function handleTimeOut() {
    showFeedback(false, false, null);
    // Overwrite the title text for timeout feeling
    document.getElementById("feedback-title").innerText = "Hết Thời Gian!";
}

