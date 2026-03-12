const questionBank = [
    // --- Dễ (Easy) : 10 questions ---
    {
        id: "e1",
        difficulty: "easy",
        scenario: 'Khách hàng: "Tôi không có nhiều thời gian đâu. Tóm lại sản phẩm này giải quyết được vấn đề gì cho tôi? Đi thẳng vào vấn đề đi."',
        correctDisc: "D",
        responses: [
            { id: "1a", text: "Trình bày lan man về lịch sử hình thành của công ty và các thành tựu.", isCorrect: false },
            { id: "1b", text: "Trực tiếp nêu 3 lợi ích cốt lõi nhất và thời gian hoàn thành.", isCorrect: true },
            { id: "1c", text: "Hỏi thăm sức khỏe gia đình khách hàng để tạo sự thân thiện.", isCorrect: false },
            { id: "1d", text: "Đưa ra một bản báo cáo dài 50 trang để khách hàng tự đọc.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm D (Dominance) có đặc điểm: Quyết đoán, hướng tới kết quả, nóng vội và không thích vòng vo.",
            response: "Với khách hàng nhóm D, phản hồi tốt nhất là ngắn gọn, đi thẳng vào trọng tâm và đưa ra giải pháp thực tế.",
            wrongResponses: {
                "1a": "Khách hàng nhóm D không quan tâm đến quá khứ hay những câu chuyện dài dòng, họ chỉ cần kết quả hiện tại.",
                "1c": "Sự thân mật trớ trêu này sẽ làm mất thời gian và khiến họ bực mình vì họ đang vội.",
                "1d": "Họ thiếu kiên nhẫn để đọc các tài liệu dài. Cần đúc kết lại cho họ."
            }
        }
    },
    {
        id: "e2",
        difficulty: "easy",
        scenario: 'Khách hàng: "Chào em! Hôm nay em thế nào? Chị thấy sản phẩm này hay quá, bạn chị ai cũng khen. App này chắc là vui lắm đây!"',
        correctDisc: "I",
        responses: [
            { id: "2a", text: "Lạnh lùng đưa báo giá và yêu cầu khách ký hợp đồng ngay.", isCorrect: false },
            { id: "2b", text: "Cung cấp bảng thông số kỹ thuật khô khan chi tiết 10 trang.", isCorrect: false },
            { id: "2c", text: "Đáp lại bằng thái độ niềm nở, hào hứng và chia sẻ những câu chuyện thành công thú vị.", isCorrect: true },
            { id: "2d", text: "Cảnh báo khách hàng về những rủi ro có thể gặp phải khi dùng sản phẩm.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm I (Influence) rất nhiệt tình, lạc quan, thích giao tiếp, chú trọng vào cảm xúc và các mối quan hệ.",
            response: "Nên hòa nhịp với sự hào hứng của họ, sử dụng ngôn ngữ giàu cảm xúc và kể chuyện (storytelling).",
            wrongResponses: {
                "2a": "Sự lạnh lùng sẽ dập tắt cảm xúc của họ và làm hỏng mối quan hệ.",
                "2b": "Họ không thích chi tiết kỹ thuật phức tạp, họ thích bức tranh tổng thể và sự thú vị.",
                "2d": "Nhóm I lạc quan, việc tập trung quá nhiều vào tiêu cực sẽ làm họ mất hứng thú."
            }
        }
    },
    {
        id: "e3",
        difficulty: "easy",
        scenario: 'Khách hàng: "Tôi hơi lo về việc đổi sang hệ thống mới. Công ty chúng tôi thích sự ổn định. Các bạn có cam kết hỗ trợ chúng tôi nếu gặp xáo trộn không?"',
        correctDisc: "S",
        responses: [
            { id: "3a", text: "Ép khách hàng chốt sale ngay vì 'sản phẩm đang hot, không mua là hết hạn khuyến mãi'.", isCorrect: false },
            { id: "3b", text: "Cam kết đồng hành hướng dẫn từng bước và cung cấp lộ trình chuyển đổi an toàn, giảm rủi ro.", isCorrect: true },
            { id: "3c", text: "Bảo khách hàng là 'cứ dùng đi rồi sẽ quen, ai cũng thế cả mà'.", isCorrect: false },
            { id: "3d", text: "Chỉ tập trung vào công nghệ hiện đại nhất mà hệ thống sử dụng.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm S (Steadiness) đề cao sự ổn định, an toàn, trung thành và ngại sự thay đổi đột ngột.",
            response: "Cần cho họ thấy sự đảm bảo, cam kết đồng hành và một kế hoạch rõ ràng từng bước để giảm bớt lo lắng.",
            wrongResponses: {
                "3a": "Sự ép buộc làm nhóm S cảm thấy bất an và họ sẽ lùi lại.",
                "3c": "Câu nói này gạt bỏ đi nỗi lo chính đáng của họ, cho thấy bạn thiếu sự đồng cảm.",
                "3d": "Công nghệ mới nghe có vẻ rủi ro với nhóm S nếu không đi kèm với sự hỗ trợ an toàn."
            }
        }
    },
    {
        id: "e4",
        difficulty: "easy",
        scenario: 'Khách hàng: "Cho tôi xem tài liệu chứng minh về thông số bảo mật, bằng chứng nhận tiêu chuẩn ISO của phần mềm được không?"',
        correctDisc: "C",
        responses: [
            { id: "4a", text: "Bảo khách hàng yên tâm vì 'hàng ngàn người đang dùng không sao cả'.", isCorrect: false },
            { id: "4b", text: "Nói về những tính năng mới mẻ, bóng bẩy nhất của phần mềm.", isCorrect: false },
            { id: "4c", text: "Cung cấp chính xác tài liệu và số liệu chứng minh khách hàng yêu cầu, một cách logic.", isCorrect: true },
            { id: "4d", text: "Hứa hẹn suông nhưng không gửi tài liệu.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm C (Compliance) rất tỉ mỉ, logic, dựa trên dữ liệu, bằng chứng thay vì cảm xúc.",
            response: "Bạn trúng 'tim đen' của họ bằng cách cung cấp dữ liệu minh bạch, tài liệu chính xác và phân tích logic.",
            wrongResponses: {
                "4a": "Cảm nhận hay niềm tin của số đông không có ý nghĩa với nhóm C bằng các con số thực tế.",
                "4b": "Sự hào nhoáng không làm che mờ được nhu cầu tìm hiểu sự thật và tính năng bảo mật căn bản của họ.",
                "4d": "Sự thiếu chuyên nghiệp và không uy tín sẽ làm mất lòng tin của nhóm C vĩnh viễn."
            }
        }
    },
    {
        id: "e5",
        difficulty: "easy",
        scenario: 'Khách hàng: "Bên bạn xử lý chậm quá. Tôi cần ngay lịch hẹn làm việc trong chiều nay hoặc tôi sẽ tìm đối tác khác!"',
        correctDisc: "D",
        responses: [
            { id: "5a", text: "Xác nhận ngay lập tức lịch hẹn, tập trung giải quyết vấn đề nhanh gọn.", isCorrect: true },
            { id: "5b", text: "Giải thích dông dài về quy trình nội bộ tại sao lại chậm trễ.", isCorrect: false },
            { id: "5c", text: "Trấn an họ bằng giọng điệu chậm rãi đều đều.", isCorrect: false },
            { id: "5d", text: "Tranh cãi lại rằng thời gian xử lý vẫn đang đúng quy định.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm D thiếu kiên nhẫn, đòi hỏi hành động tức thì và hiệu quả.",
            response: "Hành động ngay lập tức và đưa ra giải pháp là cách tốt nhất để xoa dịu nhóm D.",
            wrongResponses: {
                "5b": "Nhóm D không quan tâm lý do, họ chỉ cần kết quả cuối cùng.",
                "5c": "Sự chậm chạp sẽ thổi bùng thêm cơn giận của họ.",
                "5d": "Đối đầu với nhóm D khi họ đang nóng giận sẽ làm hỏng cuộc thương lượng."
            }
        }
    },
    {
        id: "e6",
        difficulty: "easy",
        scenario: 'Khách hàng: "Giao diện này nhìn đẹp ghê! Chắc dùng thích lắm nhỉ, để chị chia sẻ cho mấy người bạn thử xem sao, họ rành mấy cái này lắm."',
        correctDisc: "I",
        responses: [
            { id: "6a", text: "Bảo họ khoan hãy chia sẻ, vì còn nhiều lỗi chưa test xong.", isCorrect: false },
            { id: "6b", text: "Cảm ơn nồng nhiệt, hùa theo cảm xúc của họ và tặng thêm ưu đãi nếu họ giới thiệu.", isCorrect: true },
            { id: "6c", text: "Im lặng và gật đầu, đưa ra tờ giấy hướng dẫn sử dụng.", isCorrect: false },
            { id: "6d", text: "Hỏi lại họ về kiến thức bảo mật hệ thống.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm I thích kết nối, được công nhận và rất dễ lan tỏa cảm xúc tích cực cho người khác.",
            response: "Khích lệ sự hào hứng và tận dụng mạng lưới quan hệ của họ bằng cách đồng cảm và hưởng ứng.",
            wrongResponses: {
                "6a": "Cắt ngang sự hào hứng và đưa yếu tố tiêu cực vào sẽ làm họ hụt hẫng.",
                "6c": "Thiếu sự tương tác cảm xúc sẽ làm nhóm I thấy nhàm chán.",
                "6d": "Chuyển chủ đề sang kỹ thuật nhức đầu sẽ khiến họ lập tức chán nản."
            }
        }
    },
    {
        id: "e7",
        difficulty: "easy",
        scenario: 'Khách hàng: "Tôi quen dùng hãng A 5 năm nay rồi. Đổi sang bên bạn liệu mọi người trong công ty tôi có bị shock không?"',
        correctDisc: "S",
        responses: [
            { id: "7a", text: "Khẳng định bên bạn tốt hơn hẳn, chê bai hãng A.", isCorrect: false },
            { id: "7b", text: "Nói rằng ai rồi chả phải thay đổi, họ nên quen với điều đó.", isCorrect: false },
            { id: "7c", text: "Đồng cảm với nỗi lo của họ, đưa ra kế hoạch hỗ trợ chuyển đổi từ từ, thân thiện.", isCorrect: true },
            { id: "7d", text: "Đưa ra 1 mớ bảng biểu so sánh kỹ thuật phức tạp.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm S đề cao thói quen, sợ rủi ro và quan tâm đến sự thoải mái của 'mọi người trong công ty'.",
            response: "Cần xoa dịu sự lo lắng, cung cấp môi trường an toàn và tránh sự thay đổi đột ngột.",
            wrongResponses: {
                "7a": "Xúc phạm thói quen cũ của họ có thể khiến họ phòng thủ.",
                "7b": "Sự phủ nhận cảm xúc rụt rè của họ là tối kỵ với người có xu hướng S.",
                "7d": "Nhóm S cần sự đảm bảo cá nhân và lộ trình rõ ràng, thay vì một mớ số liệu gây rối trí."
            }
        }
    },
    {
        id: "e8",
        difficulty: "easy",
        scenario: 'Khách hàng: "Trong hợp đồng ghi điều khoản bồi thường thế nào nếu hệ thống ngừng hoạt động quá 2 tiếng? Gửi cho tôi bộ phụ lục!"',
        correctDisc: "C",
        responses: [
            { id: "8a", text: "Phớt lờ và bảo: 'Chưa từng bị sập đâu anh, yên tâm!'", isCorrect: false },
            { id: "8b", text: "Chỉ cho họ chính xác điều khoản số mấy, kèm file phụ lục rõ ràng.", isCorrect: true },
            { id: "8c", text: "Khuyên họ không nên quá lo xa và mời họ đi uống cà phê.", isCorrect: false },
            { id: "8d", text: "Đưa ra câu trả lời chung chung: 'Bên em sẽ bồi thường thỏa đáng'.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm C làm việc trên nguyên tắc, quy định rõ ràng và rủi ro được đo lường cụ thể.",
            response: "Sự chuyên nghiệp, rõ ràng, đưa thông tin chuẩn xác sẽ chinh phục được họ.",
            wrongResponses: {
                "8a": "Một lời hứa suông không có giá trị với người chỉ tin vào văn bản và quy định.",
                "8c": "Họ quan tâm đến giải quyết rủi ro pháp lý, không phải việc xây dựng quan hệ lúc này.",
                "8d": "Từ 'thỏa đáng' là quá vòng vo và thiếu định lượng cho nhóm C."
            }
        }
    },
    {
        id: "e9",
        difficulty: "easy",
        scenario: 'Khách hàng: "Tại sao đơn hàng của tôi lại trễ? Giải quyết ngay, đừng để tôi gọi báo cho sếp của anh!"',
        correctDisc: "D",
        responses: [
            { id: "9a", text: "Xin lỗi rối rít và khóc lóc vì hoàn cảnh khó khăn.", isCorrect: false },
            { id: "9b", text: "Đưa ra giải pháp giải quyết ngay lập tức và nói rõ bao giờ hàng tới tay.", isCorrect: true },
            { id: "9c", text: "Nói rằng đó là lỗi của bên chuyển phát nhanh.", isCorrect: false },
            { id: "9d", text: "Phớt lờ thái độ của họ và hỏi về cảm nhận dịch vụ.", isCorrect: false }
        ],
        explanation: {
            disc: "Hành động dọa dẫm, đòi hỏi hành động ngay lập tức là đặc trưng của D khi gặp sự cố.",
            response: "Dập tắc cơn giận bằng sự tự tin, xử lý tận gốc vấn đề một cách nhanh nhất.",
            wrongResponses: {
                "9a": "Nhóm D khinh thường sự thiếu bản lĩnh và yếu đuối.",
                "9c": "Đổ lỗi không giải quyết được vấn đề thực tại là họ chưa nhận được hàng, càng làm họ phẫn nộ.",
                "9d": "Sẽ làm họ bực tức tột độ vì cảm thấy không được tôn trọng."
            }
        }
    },
    {
        id: "e10",
        difficulty: "easy",
        scenario: 'Khách hàng: "Ôi ngoài trời mưa to quá! Chỗ em đi làm có ướt không? Mà hôm nay chị mới có thời gian lướt xem món đồ bên em..."',
        correctDisc: "I",
        responses: [
            { id: "10a", text: "Cắt ngang lời khách, bảo khách vào ngay vấn đề mua hàng.", isCorrect: false },
            { id: "10b", text: "Gửi báo giá mà không đáp lại câu hỏi thăm.", isCorrect: false },
            { id: "10c", text: "Vui vẻ đáp lại câu hỏi thăm, tạo không khí thân thiện trước khi tư vấn sản phẩm.", isCorrect: true },
            { id: "10d", text: "Giải thích các tính năng một cách học thuật, khô khan.", isCorrect: false }
        ],
        explanation: {
            disc: "Thích giao tiếp, nói chuyện phiếm, cởi mở là biểu hiện của người có nhóm I cao.",
            response: "Nên khởi động bằng một cuộc trò chuyện ngắn vui vẻ để tạo thiện cảm và tạo đà cho tư vấn.",
            wrongResponses: {
                "10a": "Nhóm I coi trọng sự giao tiếp, cắt ngang lời họ là sự xúc phạm cá nhân.",
                "10b": "Quá lạnh lùng sẽ làm mất đi thiện cảm của nhóm I.",
                "10d": "Họ thích trò chuyện bằng cảm xúc hơn là những phân tích kỹ thuật thô cứng."
            }
        }
    },

    // --- Trung bình (Medium) : 8 questions ---
    {
        id: "m1",
        difficulty: "medium",
        scenario: 'Khách hàng: "Tôi biết đối thủ của các bạn đang gửi báo giá thấp hơn 10%. Tại sao tôi phải ký với bên bạn? Chỉ cho tôi lợi ích cốt lõi nhất!"',
        correctDisc: "D",
        responses: [
            { id: "m1a", text: "Năn nỉ khách hàng thương tình vì doanh số phòng bạn đang kém.", isCorrect: false },
            { id: "m1b", text: "Lôi biểu đồ phân tích 50 trang ra để giải thích dài dòng.", isCorrect: false },
            { id: "m1c", text: "Vào thẳng vấn đề: chứng minh ROI (tỷ suất sinh lời) của bên bạn cao hơn sự khác biệt 10% kia như thế nào.", isCorrect: true },
            { id: "m1d", text: "Nói xấu đối thủ để dìm hàng họ trước mặt khách.", isCorrect: false }
        ],
        explanation: {
            disc: "Mục tiêu là chiến thắng và hiệu quả (ROI). Yêu cầu ngắn gọn, không thích vòng vo.",
            response: "Lấy hiệu quả thực tế và con số sinh lời (ROI) để so sánh ngắn gọn, đánh trúng đòn tâm lý của người nhóm D.",
            wrongResponses: {
                "m1a": "Làm mất vị thế đàm phán, nhóm D không hoạt động dựa trên sự thương hại.",
                "m1b": "Họ cần 'lợi ích cốt lõi nhất', không có thời gian cho 50 trang.",
                "m1d": "Nói xấu không thể hiện được năng lực thực sự của giải pháp bạn mang lại."
            }
        }
    },
    {
        id: "m2",
        difficulty: "medium",
        scenario: 'Khách hàng: "Dự án này mà thành công thì sẽ hoành tráng lắm đây! Em thấy nếu làm event thì sếp chị có thích ý tưởng sân khấu ngoài trời không?"',
        correctDisc: "I",
        responses: [
            { id: "m2a", text: "Thể hiện sự hào hứng, đóng góp thêm vài ý tưởng độc đáo để làm nổi bật sự kiện.", isCorrect: true },
            { id: "m2b", text: "Nhắc nhở khách hàng về rủi ro thời tiết và khuyên hủy bỏ ý tưởng.", isCorrect: false },
            { id: "m2c", text: "Yêu cầu khách hàng đặt cọc trước ngân sách thì mới bàn bạc tiếp.", isCorrect: false },
            { id: "m2d", text: "Liệt kê các quy định phòng cháy chữa cháy cần tuân thủ cho sự kiện.", isCorrect: false }
        ],
        explanation: {
            disc: "Người nhóm I thích sự sáng tạo, sự công nhận (hoành tráng) và cực kỳ nhiệt tình với ý tưởng mới.",
            response: "Kích thích và cổ vũ khả năng sáng tạo của họ, tạo sự thăng hoa cảm xúc.",
            wrongResponses: {
                "m2b": "Đập tan sự hào hứng bằng yếu tố tiêu cực sớm sẽ làm họ thất vọng.",
                "m2c": "Nói về tiền bạc ngay khi họ đang bay bổng làm tụt cảm xúc.",
                "m2d": "Điều khoản khô cứng nên được đề cập khéo léo sau, không phải lúc khởi điểm ý tưởng."
            }
        }
    },
    {
        id: "m3",
        difficulty: "medium",
        scenario: 'Khách hàng: "Tôi muốn tham khảo thêm ý kiến của phòng Kế toán và Hành chính trước khi quyết định. Mọi người đều đồng ý thì tôi mới yên tâm ký."',
        correctDisc: "S",
        responses: [
            { id: "m3a", text: "Xúi giục họ tự quyết định đi vì họ là người có quyền cao nhất.", isCorrect: false },
            { id: "m3b", text: "Ủng hộ việc lấy ý kiến, đề xuất tham gia thuyết trình chung để giải đáp thắc mắc cho mọi người.", isCorrect: true },
            { id: "m3c", text: "Tỏ vẻ mất kiên nhẫn và cho rằng họ đang làm mất thời gian.", isCorrect: false },
            { id: "m3d", text: "Liên tục thúc ép hàng ngày hối thúc họ xin ý kiến nhanh lên.", isCorrect: false }
        ],
        explanation: {
            disc: "Người nhóm S coi trọng sự đồng thuận của tập thể, sợ xung đột nội bộ, cần quyết định tập thể.",
            response: "Thấu hiểu mong muốn hòa bình của họ và đề xuất hỗ trợ để làm quá trình đó dễ dàng hơn.",
            wrongResponses: {
                "m3a": "Điều đó đẩy họ vào thế rủi ro đối đầu nội bộ, họ sẽ không nghe theo.",
                "m3c": "Thái độ đó phá vỡ mối quan hệ an toàn mà người nhóm S tìm kiếm.",
                "m3d": "Sự hối thúc liên tục sẽ làm họ căng thẳng và có xu hướng tránh mặt bạn."
            }
        }
    },
    {
        id: "m4",
        difficulty: "medium",
        scenario: 'Khách hàng: "Theo biểu đồ đánh giá quý 3, tôi thấy tỷ lệ lỗi (bug) lại tăng 0.5% so với quý 2. Tại sao lại có sự chênh lệch phi logic này?"',
        correctDisc: "C",
        responses: [
            { id: "m4a", text: "Bảo do nhân sự bên khách dùng sai cách chứ không phải do app.", isCorrect: false },
            { id: "m4b", text: "Giải thích rõ ràng bằng báo cáo nguyên nhân cốt lõi (Root Cause) và lộ trình khắc phục trong tháng 4.", isCorrect: true },
            { id: "m4c", text: "Cười trừ và bảo '0.5% là nhỏ xíu mà anh, không đáng lo đâu'.", isCorrect: false },
            { id: "m4d", text: "Đổi chủ đề sang tính năng sắp ra mắt để đánh lạc hướng.", isCorrect: false }
        ],
        explanation: {
            disc: "Quan sát tiểu tiết, yêu cầu tính logic cao và cực kỳ nhạy cảm với dữ liệu chưa hoàn hảo là nhóm C.",
            response: "Phân tích, chỉ ra nguyên nhân và có một kế hoạch giải quyết mang tính hệ thống.",
            wrongResponses: {
                "m4a": "Đổ lỗi mà không có phân tích chứng minh sẽ khiến họ đánh giá bạn là thiếu chuyên nghiệp.",
                "m4c": "Với nhóm C, mọi sai số toán học đều cần làm rõ, việc coi nhẹ nó là sự xúc phạm chuyên môn.",
                "m4d": "Họ sẽ không chịu bị đánh lạc hướng, ngược lại còn thấy bạn không minh bạch."
            }
        }
    },
    {
        id: "m5",
        difficulty: "medium",
        scenario: 'Khách hàng: "Đừng gửi cho tôi file PDF dài 50 trang nữa. Gửi tôi 1 trang tóm tắt bullet-point các tính năng và giá ngay bây giờ để tôi chốt."',
        correctDisc: "D",
        responses: [
            { id: "m5a", text: "Gửi 1 trang tóm tắt ngắn gọn nhất theo đúng ý khách, chốt thông tin chính xác.", isCorrect: true },
            { id: "m5b", text: "Phàn nàn lại rằng file PDF của bạn được làm rất kỳ công, họ nên đọc kỹ.", isCorrect: false },
            { id: "m5c", text: "Chỉ gửi giá mà không có tính năng, bảo khi nào rảnh nói chuyện.", isCorrect: false },
            { id: "m5d", text: "Gửi file ghi âm dài 15 phút nói chi tiết báo giá thay cho văn bản.", isCorrect: false }
        ],
        explanation: {
            disc: "Thiếu kiên nhẫn với chi tiết vô ích, muốn quyền kiểm soát thời gian, đó là D.",
            response: "Làm đúng thứ họ yêu cầu: Nhanh, ngắn gọn, súc tích (1 page executive summary).",
            wrongResponses: {
                "m5b": "Họ không rảnh để quan tâm tới sự kỳ công trong công việc của bạn, họ cần thông tin đích.",
                "m5c": "Cắt bớt thông tin yêu cầu sẽ chứng tỏ bạn không nắm được trọng tâm công việc.",
                "m5d": "Họ muốn bullet-point để lướt nhanh, file ghi âm bắt họ tốn nhiều thời gian hơn."
            }
        }
    },
    {
        id: "m6",
        difficulty: "medium",
        scenario: 'Khách hàng: "Bên em có tổ chức event ra mắt sản phẩm không? Chị rất thích tham gia mạng lưới của các bạn và chụp ảnh check-in trải nghiệm!"',
        correctDisc: "I",
        responses: [
            { id: "m6a", text: "Từ chối phũ phàng và nói công ty bạn không thích làm màu.", isCorrect: false },
            { id: "m6b", text: "Mời họ vào thẳng danh sách VIP sự kiện, hào hứng nói về các góc chụp ảnh đẹp.", isCorrect: true },
            { id: "m6c", text: "Hỏi họ xem báo cáo tài chính năm ngoái chưa.", isCorrect: false },
            { id: "m6d", text: "Để lại tin nhắn tự động cảm ơn.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm I thích sự chú ý, sự kiện xã hội, nơi đông người và được chia sẻ (check-in trải nghiệm).",
            response: "Tạo cơ hội để họ thỏa mãn sở thích ngoại giao và biến họ thành người lan tỏa thương hiệu.",
            wrongResponses: {
                "m6a": "Câu trả lời này là sự đả kích mạnh mẽ đến tính cách yêu thích sự kiện cở mở của họ.",
                "m6c": "Số liệu khô khan và tài chính là điều họ ít hứng thú nhất lúc này.",
                "m6d": "Robot và tin nhắn auto dập tắt kết nối con người mà I mong đợi."
            }
        }
    },
    {
        id: "m7",
        difficulty: "medium",
        scenario: 'Khách hàng: "Gói bảo hiểm này nghe có vẻ tốt, nhưng nhà tôi cần suy nghĩ kỹ. Anh cứ để tài liệu ở đó, tôi sẽ xem và trả lời trong vài tuần tới."',
        correctDisc: "S",
        responses: [
            { id: "m7a", text: "Đồng ý để lại tài liệu, sắp xếp cuộc gọi follow-up nhẹ nhàng vào tuần sau để giải đáp.", isCorrect: true },
            { id: "m7b", text: "Ép họ: 'Không được đâu anh, gói này mai hết hạn rồi, anh ký ngay đi!'", isCorrect: false },
            { id: "m7c", text: "Nổi cáu vì họ làm mất thời gian tư vấn của bạn.", isCorrect: false },
            { id: "m7d", text: "Nói rằng suy nghĩ nhiều là không giỏi quyết đoán.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm S không vội vã, họ cần thời gian cân nhắc (rủi ro/an toàn) và nhịp độ chậm rãi.",
            response: "Tôn trọng nhịp điệu của họ, tạo không gian an toàn bằng cách không dồn ép.",
            wrongResponses: {
                "m7b": "Chiến thuật dồn ép giới hạn thời gian thường có hiệu ứng ngược lại (bỏ chạy) với S.",
                "m7c": "Mất đi thái độ hỗ trợ thân thiện.",
                "m7d": "Nhận xét tiêu cực về sự cẩn trọng của họ sẽ phá hỏng mối quan hệ."
            }
        }
    },
    {
        id: "m8",
        difficulty: "medium",
        scenario: 'Khách hàng: "Hôm qua bên em cập nhật phần mềm, tôi muốn biết chính xác phiên bản này đã vá 3 lỗi SQL injection mà tôi report tháng trước chưa?"',
        correctDisc: "C",
        responses: [
            { id: "m8a", text: "Bảo rằng 'Bên em vá nhiều lỗi lắm, anh cứ yên tâm dùng'.", isCorrect: false },
            { id: "m8b", text: "Trình bày cụ thể Log Update (changelog) chứng minh 3 lỗi SQL injection đã được fix hoàn chỉnh.", isCorrect: true },
            { id: "m8c", text: "Nói chung chung là hệ thống giờ mượt mà hơn rất nhiều, giao diện mới đẹp hơn.", isCorrect: false },
            { id: "m8d", text: "Trách móc khách hàng quá soi mói hệ thống.", isCorrect: false }
        ],
        explanation: {
            disc: "Sự phân tích kỹ lưỡng, ghi nhớ lỗi cụ thể, đòi hỏi sự nhất quán và chi tiết bảo mật.",
            response: "Chỉ có chi tiết cụ thể (changelog/tài liệu kỹ thuật minh bạch) mới thuyết phục được C.",
            wrongResponses: {
                "m8a": "Quá mù mờ, không đủ độ tin cậy.",
                "m8c": "Giao diện hay mượt mà không trả lời được câu hỏi cốt lõi về lỗ hổng bảo mật.",
                "m8d": "Họ đang làm đúng chuyên môn và tính cách của mình, không phải là 'soi mói'."
            }
        }
    },

    // --- Khó (Hard) : 7 questions ---
    {
        id: "h1",
        difficulty: "hard",
        scenario: 'Khách hàng: "Tôi yêu cầu lập tức giải quyết cái sự cố server chết tiệt này trong 5 phút! Không báo cáo dài dòng, tôi cần web hoạt động ngay! Anh có làm được không?"',
        correctDisc: "D",
        responses: [
            { id: "h1a", text: "Khẳng định chuyên viên mạng đang xử lý khẩn cấp, cam kết trả lại web trong 5 phút.", isCorrect: true },
            { id: "h1b", text: "Từ từ giải thích thao tác khôi phục là gì, do lỗi đường dẫn ABC...", isCorrect: false },
            { id: "h1c", text: "Bảo khách hàng thông cảm lỗi là do nhà cung cấp internet.", isCorrect: false },
            { id: "h1d", text: "Lớn tiếng cãi lại bảo 5 phút là bất khả thi, phải chờ 1 tiếng.", isCorrect: false }
        ],
        explanation: {
            disc: "Trong trạng thái áp lực tột độ, nhóm D biểu hiện sự độc đoán, hung hăng, muốn nắm quyền kiểm soát và không chấp nhận lý do.",
            response: "Phản hồi đáp ứng thẳng vào nhu cầu (kết quả hoạt động) với một cam kết rõ ràng.",
            wrongResponses: {
                "h1b": "Họ đang mất bình tĩnh, giải thích nguyên lý hoạt động lúc này là đổ thêm dầu vào lửa.",
                "h1c": "Đổ lỗi là hành vi nhóm D cực kỳ coi thường.",
                "h1d": "Phủ nhận yêu cầu của họ ngay lập tức mà không đưa ra đối sách sẽ dập tắt cơ hội nói chuyện."
            }
        }
    },
    {
        id: "h2",
        difficulty: "hard",
        scenario: 'Khách hàng: "Tôi rất thích giải pháp của bạn, nhưng tôi sợ team của tôi chưa quen. Bạn có thể đến tổ chức một buổi workshop thật sôi động để truyền cảm hứng cho mọi người cùng hào hứng như tôi không?"',
        correctDisc: "I",
        responses: [
            { id: "h2a", text: "Gửi 1 email dài 20 trang để hướng dẫn sử dụng thay vì tổ chức workshop.", isCorrect: false },
            { id: "h2b", text: "Từ chối vì việc đó tốn kém chi phí đi lại của bạn.", isCorrect: false },
            { id: "h2c", text: "Đồng ý ngay với lời khen ngợi tinh thần lãnh đạo của họ, hỗ trợ lên kịch bản workshop năng động.", isCorrect: true },
            { id: "h2d", text: "Nói rằng nhân sự bên họ quá trì trệ, không đáng bỏ công.", isCorrect: false }
        ],
        explanation: {
            disc: "Câu này kết hợp giữa mong muốn cho môi trường tập thể (có vẻ của S) nhưng điểm nhấn là 'sôi động, truyền cảm hứng, hào hứng' => bản chất I.",
            response: "Tận dụng sự nhiệt tình của khách, đứng sau hỗ trợ họ tỏa sáng trước phòng ban của mình.",
            wrongResponses: {
                "h2a": "Tài liệu dài rất nhàm chán và không phù hợp tinh thần 'sôi động'.",
                "h2b": "Bỏ lỡ cơ hội chốt sale và xây dựng mối quan hệ tuyệt vời với người ảnh hưởng.",
                "h2d": "Sẽ làm họ tự ái và kết thúc mối quan hệ đang rất tốt đẹp."
            }
        }
    },
    {
        id: "h3",
        difficulty: "hard",
        scenario: 'Khách hàng: "Mặc dù giải pháp kia rẻ hơn khá nhiều, nhưng tôi vẫn muốn gắn bó với công ty bạn vì chúng ta đã tin tưởng nhau 5 năm. Có cách nào ưu đãi thêm một chút để tôi dễ nói chuyện nội bộ không?"',
        correctDisc: "S",
        responses: [
            { id: "h3a", text: "Ép khách hàng tự chọn: 'Ông chê đắt thì qua bên kia mà mua!'", isCorrect: false },
            { id: "h3b", text: "Trân trọng sự trung thành của họ, thiết kế một gói tri ân đặc biệt bù phần chênh giá để giữ họ lại.", isCorrect: true },
            { id: "h3c", text: "Bỏ qua yêu cầu ưu đãi vì nghĩ 'họ sợ đổi mới nên sẽ không đi đâu đâu'.", isCorrect: false },
            { id: "h3d", text: "Đưa ra bản phân tích chi phí siêu rắc rối cố chứng minh bên bạn không đắt.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm S có tính trung thành rất cao, ghét thay đổi, trân trọng mối quan hệ lâu dài.",
            response: "Đền đáp sự kiên định của họ bằng lòng biết ơn và phần thưởng để củng cố mối liên kết an toàn.",
            wrongResponses: {
                "h3a": "Sự kiêu ngạo sẽ chặt đứt mối dây trung thành của họ, nhóm S tổn thương rất sâu.",
                "h3c": "Lợi dụng điểm yếu sợ thay đổi của khách hàng là phi đạo đức, họ sẽ thất vọng và rời đi ngấm ngầm.",
                "h3d": "Không cần thiết, họ đã tự chọn bạn rồi, họ chỉ cần thêm sự hỗ trợ nhỏ cho khâu nội bộ."
            }
        }
    },
    {
        id: "h4",
        difficulty: "hard",
        scenario: 'Khách hàng: "Sau khi phân tích 3 phần mềm, bên bạn đạt 85/100 điểm. Tuy nhiên còn 3 lỗi về Export Data, tôi cần biên bản giải trình về kế hoạch update kỹ thuật trước khi trình CEO ký."',
        correctDisc: "C",
        responses: [
            { id: "h4a", text: "Đưa ra file Word hứa hẹn mơ hồ: 'Sẽ khắc phục trong quý tới, tỷ lệ thành công 100%'.", isCorrect: false },
            { id: "h4b", text: "Mời khách đi nhậu để tạo quan hệ, mong khách châm chước 3 lỗi kỹ thuật kia.", isCorrect: false },
            { id: "h4c", text: "Gửi báo cáo Technical Update lộ trình cụ thể từng task, kèm timeline giải quyết 3 lỗi đó minh bạch.", isCorrect: true },
            { id: "h4d", text: "Nổi nóng vì cho rằng 85 điểm là quá cao rồi, đòi hỏi gì nữa.", isCorrect: false }
        ],
        explanation: {
            disc: "Tính toán kỹ năng (chấm điểm), chỉ ra khiếm khuyết (3 lỗi) và đòi quy trình khắc phục (kế hoạch minh bạch) chính xác là nhóm C.",
            response: "Đáp ứng đúng mức độ chuyên nghiệp và chi tiết mà C yêu cầu bằng lộ trình (timeline) sắc bén.",
            wrongResponses: {
                "h4a": "C sẽ nhận ra ngay sự mơ hồ và thiếu chi tiết trong lời hứa thiết lập.",
                "h4b": "C không thích dùng tình cảm để bóp méo nguyên tắc công việc chuyên môn.",
                "h4d": "Người C luôn hướng tới sự hoàn hảo (100%), 85 điểm với họ là chưa đủ an toàn."
            }
        }
    },
    {
        id: "h5",
        difficulty: "hard",
        scenario: 'Khách hàng: "Tôi là Giám đốc và là người có quyền quyết định cuối cùng. Bỏ qua các khâu trình bày slide đi, Deal (thỏa thuận) cuối cùng của các bạn là gì để tôi ký ngay bây giờ?"',
        correctDisc: "D",
        responses: [
            { id: "h5a", text: "Chốt ngay mức giá Bottom-Line (giá sàn) cam kết trong vòng 3 câu.", isCorrect: true },
            { id: "h5b", text: "Khăng khăng bắt Giám đốc phải xem cho xong bộ slide 20 trang chuẩn bị sẵn.", isCorrect: false },
            { id: "h5c", text: "Ngập ngừng xin thêm thời gian hỏi lại cấp trên của bạn.", isCorrect: false },
            { id: "h5d", text: "Khen ngợi chiếc đồng hồ đắt tiền của Giám đốc để làm thân.", isCorrect: false }
        ],
        explanation: {
            disc: "Thích thể hiện quyền lực ('Tôi là người quyết định'), đi thẳng vào trọng tâm ('deal cuối là gì?').",
            response: "Chớp thời cơ chốt sale quyết đoán, phong thái tự tin nhanh gọn ngang tầm với họ.",
            wrongResponses: {
                "h5b": "Áp đặt quy trình của bạn lên D khi họ đang nắm quyền lực cao nhất sẽ làm thất bại hoàn toàn.",
                "h5c": "Họ thích làm việc với người cũng có quyền quyết định. Sự ngập ngừng làm mất điểm tín nhiệm.",
                "h5d": "Không đúng lúc. Họ đang muốn nói về công việc, không phải chuyện cá nhân."
            }
        }
    },
    {
        id: "h6",
        difficulty: "hard",
        scenario: 'Khách hàng: "Tool này hay đấy, nhưng tôi muốn biết có KOLs nào nổi tiếng hay Brand lớn nào đã public dùng nó chưa? Công ty tôi đi đầu xu hướng làm màu mà, phải làm cái gì đó chất chơi!"',
        correctDisc: "I",
        responses: [
            { id: "h6a", text: "Nhấn mạnh vào khả năng bảo vệ dữ liệu cực kỳ khắt khe của hệ thống.", isCorrect: false },
            { id: "h6b", text: "Liệt kê chi tiết 2 thương hiệu TOP đầu và 1 Celeb đang sử dụng, kết hợp yếu tố 'đẳng cấp, xu hướng'.", isCorrect: true },
            { id: "h6c", text: "Cam đoan với họ giá bên bạn là rẻ nhất thị trường hiện nay.", isCorrect: false },
            { id: "h6d", text: "Nói rằng tính năng đủ dùng, không quan tâm thương hiệu khác đánh giá sao.", isCorrect: false }
        ],
        explanation: {
            disc: "Nhóm I coi trọng hình ảnh cá nhân/tổ chức, xu hướng, ấn tượng ('làm màu', 'chất chơi') và sức ảnh hưởng (KOLs).",
            response: "Khai thác triệt để bằng chứng xã hội, hình ảnh thương hiệu để tiếp thêm sức lan tỏa.",
            wrongResponses: {
                "h6a": "Tính năng đó là đặc quyền của (C), nhóm truyền thông (I) ít khi bận tâm tới bảo mật bằng sự 'nổi bật'.",
                "h6c": "Họ quan tâm tới giá trị nhận diện, nhắc tới sự 'rẻ' có thể làm mất đi tính cao cấp 'chất chơi'.",
                "h6d": "Thiếu sự kết nối tạo giá trị mạng lưới cho khách hàng."
            }
        }
    },
    {
        id: "h7",
        difficulty: "hard",
        scenario: 'Khách hàng: "Bên bạn hứa KPI là 10.000 leads, hiện tháng này mới đạt 9.850. Thiếu 150 leads, tương đương 1.5% giá trị hợp đồng. Tôi sẽ cấn trừ mức này vào thanh toán đợt cuối nhé."',
        correctDisc: "C",
        responses: [
            { id: "h7a", text: "Xin xỏ khách hàng thông cảm vì 1.5% là con số quá nhỏ bé.", isCorrect: false },
            { id: "h7b", text: "Đồng thuận với khách hàng trên nguyên tắc tính toán logic, điều chỉnh hóa đơn chuẩn xác số tiền đó.", isCorrect: true },
            { id: "h7c", text: "Nổi đóa chửi bới vì khách hàng quá keo kiệt.", isCorrect: false },
            { id: "h7d", text: "Bù đắp bằng việc hứa miệng tháng sau tặng 500 leads miễn phí.", isCorrect: false }
        ],
        explanation: {
            disc: "Cộng trừ sòng phẳng, tư duy logic, đúng nguyên tắc, không tính bằng cảm xúc mà bằng tỷ lệ %.",
            response: "Chấp nhận sự công bằng trong giao kèo, xử lý vấn đề một cách chuẩn xác theo hợp đồng.",
            wrongResponses: {
                "h7a": "Nhóm C không đồng ý với quan điểm 'châm chước kỷ luật' cho các con số kỹ thuật số nhỏ.",
                "h7c": "Họ đang làm việc rất có trách nhiệm với số liệu, đó không phải là keo kiệt.",
                "h7d": "Lời hứa miệng không giải quyết được bảng đối soát thực tế của kỳ kiểm toán hiện tại."
            }
        }
    }
];
