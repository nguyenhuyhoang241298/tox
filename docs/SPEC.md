# TOX – Tài liệu yêu cầu ban đầu (Web app thi thử TOEIC)

Cập nhật: 21/11/2026 · Bản gốc: [Claude Docs](https://claude.ai/artifact/N6ftWh1pJxALMSDS7fhKMY)

## 1. Tổng quan dự án

TOX là web app thi thử TOEIC Listening & Reading. Lõi sản phẩm là trải nghiệm giống thi thật trên máy tính và phân tích chi tiết sau khi làm bài, chạy tốt cả trên điện thoại.

- **Mục tiêu:** giúp người học biết điểm hiện tại, biết yếu ở Part nào và luyện đúng chỗ yếu đến khi đạt điểm mục tiêu.
- **Người dùng chính:** sinh viên cần chuẩn đầu ra TOEIC, người đi làm cần chứng chỉ để xin việc hoặc thăng tiến. Mục tiêu điểm phổ biến là 450–750.
- **Phạm vi giai đoạn đầu:** TOEIC L&R (2 kỹ năng, 7 Part, 200 câu, 120 phút). Speaking & Writing để giai đoạn sau.
- **Nền tảng:** web responsive (ReactJS + NodeJS), sau đó là PWA có chế độ offline.
- **Cách đọc mã yêu cầu:** CB = cơ bản (MVP), CC = cần có (giai đoạn 2), NC = nâng cao. Ưu tiên P1 là bắt buộc trong giai đoạn đó, P2 là làm nếu kịp.

## 2. Vai trò người dùng

| Vai trò | Mô tả | Quyền chính |
| --- | --- | --- |
| Khách | Chưa đăng nhập | Xem giới thiệu, có thể test dùng thử, không lưu kết quả |
| Học viên | Đã đăng ký, gói miễn phí | Làm đề, xem kết quả và giải thích, lưu lịch sử, bình luận |
| Học viên Premium | Đã trả phí | Thêm toàn bộ đề, phân tích sâu, lộ trình cá nhân, AI Tutor |
| Biên soạn nội dung | Đội làm đề | Tạo, sửa, gắn tag câu hỏi; tải audio/ảnh; gửi duyệt |
| Kiểm duyệt | Người duyệt đề | Duyệt hoặc trả lại câu hỏi/đề, xuất bản đề |
| Quản trị | Vận hành hệ thống | Quản lý người dùng, gói cước, bình luận bị báo cáo, xem thống kê |
| Giáo viên (giai đoạn 3) | Trường/trung tâm | Tạo lớp, giao đề, xem báo cáo lớp |

## 3. Tính năng cơ bản (MVP)

MVP phải cho người dùng làm một đề full test giống thi thật và hiểu vì sao mình sai. Đây là mức tối thiểu mà mọi đối thủ đều có.

| Mã | Nhóm | Yêu cầu | Ưu tiên |
| --- | --- | --- | --- |
| CB-01 | Tài khoản | Đăng ký/đăng nhập bằng email và Google; quên mật khẩu; đồng bộ tiến độ giữa các thiết bị | P1 |
| CB-02 | Tài khoản | Hồ sơ: tên, điểm mục tiêu, ngày dự thi | P1 |
| CB-03 | Kho đề | Danh sách đề, lọc theo loại (full/mini/theo Part) và trạng thái (chưa làm/đã làm) | P1 |
| CB-04 | Thi full test | 200 câu, 7 Part, đúng định dạng mới; Listening 45 phút phát liên tục, không tua; Reading 75 phút | P1 |
| CB-05 | Giao diện thi | Đồng hồ đếm ngược, bảng điều hướng câu, đánh dấu câu xem lại, nộp bài, tự nộp khi hết giờ | P1 |
| CB-06 | Giao diện thi | Tự lưu bài đang làm; tải lại trang hoặc mất mạng vẫn làm tiếp được | P1 |
| CB-07 | Luyện tập | Luyện theo Part; không giới hạn giờ, xem đáp án ngay sau mỗi câu | P1 |
| CB-08 | Audio | Phát ổn định, tải trước theo Part; chỉnh tốc độ 0.75x–1.25x khi luyện (khóa khi thi full test) | P1 |
| CB-09 | Chấm điểm | Chấm tự động; quy đổi 5–495 mỗi kỹ năng, tổng 990; ghi rõ đây là điểm ước tính | P1 |
| CB-10 | Kết quả | Số câu đúng/sai/bỏ trống, tỉ lệ đúng theo Part và theo dạng câu, thời gian làm từng phần | P1 |
| CB-11 | Giải thích | Mỗi câu có đáp án, giải thích tiếng Việt, transcript (Part 1–4) và dịch nghĩa | P1 |
| CB-12 | Lịch sử | Lưu mọi lượt làm; xem lại bài cũ với đáp án đã chọn | P1 |
| CB-13 | Responsive | Dùng tốt trên màn hình từ 360px; trên mobile đổi bố cục bài đọc và câu hỏi cho dễ đọc | P1 |
| CB-14 | Quản trị nội dung | CMS tạo câu hỏi (Part, dạng câu, độ khó, tag), tải audio/ảnh, ghép câu thành đề; quy trình nháp → duyệt → xuất bản | P1 |
| CB-15 | Quản trị | Quản lý người dùng, khóa tài khoản, thống kê cơ bản (số người dùng, số lượt thi) | P2 |
| CB-16 | Mini test | Đề rút gọn 15–30 phút cho người bận rộn | P2 |
| CB-17 | Cộng đồng | Bình luận dưới từng câu; báo cáo bình luận xấu; báo lỗi đáp án | P2 |

## 4. Tính năng cần có (giai đoạn 2)

Giai đoạn 2 giữ chân người dùng quay lại hằng ngày và mở đường thu phí.

| Mã | Nhóm | Yêu cầu | Ưu tiên |
| --- | --- | --- | --- |
| CC-01 | Đầu vào | Bài test đầu vào ngắn (10–15 phút) để ước lượng trình độ ban đầu | P1 |
| CC-02 | Từ vựng | Flashcard có lặp lại ngắt quãng (SRS); bôi đen từ trong bài làm để tra và thêm vào bộ thẻ | P1 |
| CC-03 | Từ vựng | Bộ từ theo mục tiêu điểm (450/600/750/900+) và theo chủ đề công sở | P2 |
| CC-04 | Ôn lỗi | Sổ lỗi sai tự động; chế độ ôn lại câu sai theo lịch | P1 |
| CC-05 | Trong bài làm | Highlight, ghi chú, phím tắt chọn đáp án và chuyển câu | P2 |
| CC-06 | Tiến độ | Dashboard: điểm theo thời gian, độ chính xác theo Part, số ngày học liên tục (streak) | P1 |
| CC-07 | Dự đoán điểm | Ước lượng điểm hiện tại từ các bài đã làm | P1 |
| CC-08 | Luyện nhanh | Bài 3–5 phút (10 câu) cho mobile | P2 |
| CC-09 | Thanh toán | Gói Premium theo tháng/quý; thanh toán qua cổng nội địa (VNPay, MoMo); phân biệt rõ phần miễn phí và trả phí | P1 |
| CC-10 | Thông báo | Email/web push nhắc học, nhắc ôn thẻ đến hạn, báo đề mới | P2 |
| CC-11 | PWA | Cài lên màn hình chính; tải trước đề và audio để làm offline, đồng bộ khi có mạng | P2 |
| CC-12 | Phản hồi | Báo lỗi nội dung có hàng chờ xử lý trong CMS | P1 |

## 5. Tính năng nâng cao (giai đoạn 3)

Các tính năng này tạo khác biệt với đối thủ trong nước, chủ yếu nhờ cá nhân hóa và AI.

| Mã | Nhóm | Yêu cầu | Ưu tiên |
| --- | --- | --- | --- |
| NC-01 | Lộ trình thích ứng | Chọn câu tiếp theo theo năng lực của người học (IRT/Elo đơn giản); kế hoạch học theo ngày đến ngày thi | P1 |
| NC-02 | Dự đoán điểm minh bạch | Hiển thị khoảng tin cậy, ví dụ “650 ± 40, dựa trên 320 câu” | P1 |
| NC-03 | AI Tutor | Giải thích vì sao đáp án khác sai, chỉ bẫy thường gặp; cho hỏi tiếp; sinh câu tương tự để luyện | P1 |
| NC-04 | Phân tích hành vi | Thời gian từng câu, số lần đổi đáp án, cảnh báo thiếu giờ ở Part 7 | P2 |
| NC-05 | Nghe chủ động | Shadowing và chép chính tả (dictation) từ audio Part 1–4 | P2 |
| NC-06 | Speaking & Writing | Phòng thi S\&W; AI chấm theo từng tiêu chí, ghi rõ là “điểm tham khảo” | P2 |
| NC-07 | Gamification | Thử thách tuần, huy hiệu, bảng xếp hạng theo trường/bạn bè, mời bạn nhận ngày Premium | P2 |
| NC-08 | Thi thử định kỳ | Mở đề cùng giờ trên toàn quốc, có xếp hạng phần trăm | P2 |
| NC-09 | B2B | Tài khoản trường/trung tâm: tạo lớp, giao đề, báo cáo lớp | P2 |
| NC-10 | App di động | App native hoặc React Native, có widget “1 câu mỗi ngày” | P2 |

## 6. Yêu cầu phi chức năng

Các con số dưới đây là mức đề xuất ban đầu, cần nhóm chốt lại.

| Mã | Nhóm | Yêu cầu |
| --- | --- | --- |
| PF-01 | Hiệu năng | Trang tải dưới 2,5 giây trên 4G; chuyển câu dưới 200 ms |
| PF-02 | Hiệu năng | Chịu được 1.000 người thi cùng lúc ở MVP, mở rộng ngang được |
| PF-03 | Audio | Phát qua CDN, nén AAC/Opus, tải trước audio Part kế tiếp; không tải lại khi đã có trong bộ nhớ đệm |
| PF-04 | Độ tin cậy | Lưu đáp án lên server mỗi 30 giây và khi chuyển câu; không mất bài khi rớt mạng |
| PF-05 | Bảo mật | HTTPS; mật khẩu băm bcrypt/argon2; JWT ngắn hạn + refresh token; giới hạn tần suất gọi API |
| PF-06 | Bảo mật nội dung | Đáp án không gửi xuống trình duyệt trước khi nộp; audio/ảnh để ở bucket riêng tư, truy cập qua signed URL |
| PF-07 | Dữ liệu cá nhân | Tuân thủ Nghị định 13/2023/NĐ-CP; có chính sách quyền riêng tư, cho người dùng xuất và xóa dữ liệu |
| PF-08 | Tương thích | Chrome, Edge, Safari, Firefox 2 phiên bản gần nhất; iOS Safari và Android Chrome |
| PF-09 | Tiếp cận | Cỡ chữ chỉnh được, chế độ tối, điều khiển được bằng bàn phím |
| PF-10 | Ngôn ngữ | Giao diện tiếng Việt, sẵn sàng i18n cho tiếng Anh |
| PF-11 | Theo dõi | Ghi log lỗi (ví dụ Sentry), đo hành vi sản phẩm (số đề hoàn thành, tỉ lệ quay lại 7 ngày) |
| PF-12 | Dữ liệu | Tách `Question` khỏi `Test` để tái sử dụng câu hỏi; lưu `Attempt` theo từng câu (đáp án, thời gian, số lần đổi) |
| PF-13 | Vận hành | Sao lưu CSDL hằng ngày, giữ 30 ngày; có môi trường staging |

## 7. Lưu ý bản quyền và câu hỏi còn mở

Rủi ro lớn nhất của dự án là nội dung đề, không phải code. STUDY4 từng phải ẩn các đề ETS, theo người dùng là vì bản quyền.

- Không dùng lại đề ETS hay đề trong sách có bản quyền. Chỉ dùng đề tự biên soạn hoặc được cấp phép.
- TOEIC và ETS là nhãn hiệu đã đăng ký. Cần câu miễn trừ “not endorsed or approved by ETS” và cân nhắc tên miền, logo.
- Audio tự sản xuất cần giọng Mỹ, Anh, Úc, Canada như đề thật. Có thể dùng TTS rồi kiểm duyệt bằng người.

**Câu hỏi cần chốt**

- [ ] Nguồn đề: tự biên soạn, mua bản quyền hay hợp tác với trung tâm? MVP cần bao nhiêu đề full test?
- [ ] Mô hình thu phí và mức giá gói Premium?
- [ ] Dùng bảng quy đổi điểm nào, và hiệu chỉnh thế nào khi có dữ liệu thật?
- [ ] Chọn nhà cung cấp AI cho AI Tutor và chấm S\&W; ngân sách chi phí mỗi người dùng?
- [ ] Hạ tầng: CSDL (PostgreSQL hay MongoDB), nơi lưu audio, nơi triển khai?
- [ ] Thời hạn ra mắt MVP và quy mô đội ngũ?
