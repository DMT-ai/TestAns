# DISC Training Game

Một game tương tác huấn luyện sử dụng mô hình DISC dành cho nhân viên Chăm sóc Khách hàng (L&D). Trò chơi đưa ra 15 tình huống chăm sóc khách hàng từ Dễ đến Khó, yêu cầu người chơi xác định nhóm tính cách của khách hàng và chọn phản hồi tốt nhất.

## Tính năng

- **Bộ câu hỏi ngẫu nhiên:** Trò chơi hỗ trợ tùy chọn độ dài ván chơi (10, 15, hoặc 20 câu). Các câu hỏi được chọn ngẫu nhiên mỗi lần chơi với độ khó tăng dần (Dễ, Trung Bình, Khó).
- **Phân tích DISC:** Rèn luyện phản xạ nhận diện khách hàng thuộc nhóm D, I, S, hay C.
- **Phản hồi chi tiết:** Giải thích cặn kẽ vì sao một câu trả lời là đúng hay sai.
- **Đồng hồ đếm ngược:** Thử thách thời gian dựa trên cấp độ câu hỏi (20s cho Dễ/Trung Bình, và 10s cho Khó).
- **Cơ chế gợi nhớ (Spaced Repetition):** Trò chơi tự động ghi nhớ các câu hỏi bạn đã gặp và có 50% tỷ lệ lặp lại chúng trong chuỗi 5 lượt chơi liên tiếp để giúp bạn ôn tập hiệu quả.
- **Quyền trợ giúp:** Tích hợp 3 quyền trợ giúp tương tự gameshow (50:50, Gợi ý, Bỏ qua). Đặc biệt, Gợi ý sẽ hiển thị thành một hộp thoại cố định trên màn hình trong suốt câu hỏi thay vì chỉ lướt qua.
- **Hiệu ứng sinh động (Premium UI):** Giao diện Glassmorphism với Background trôi lơ lửng, hiệu ứng pháo hoa và phản ứng bằng Emoji sống động đầy màu sắc.

## Cài đặt & Chạy ứng dụng

Đây là một dự án thuần HTML/CSS/JS (Vanilla), không cần cài đặt dependencies phức tạp. Thích hợp để triển khai nhanh hoặc mở trực tiếp trên trình duyệt.

1. Tải toàn bộ source code về máy.
2. Mở file `index.html` trong bất kỳ trình duyệt web nào (Chrome, Firefox, Safari...).
3. Chọn "Bắt đầu chơi" và trải nghiệm!

## Cấu trúc thư mục

- `index.html` - Khung giao diện chính của ứng dụng
- `style.css` - Chứa toàn bộ CSS styling và hiệu ứng animations
- `questions.js` - Ngân hàng câu hỏi (Data)
- `app.js` - Logic chính điều khiển luồng trò chơi
