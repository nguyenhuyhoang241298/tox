# Tasks: kế hoạch triển khai

Thư mục này chứa danh sách việc cần làm cho từng tính năng lớn. Mỗi tính năng một file, ví dụ `auth.md`.

## Quy ước

- Mỗi file ghi rõ: phạm vi, tài liệu thiết kế liên quan (trong `docs/architecture/`), yêu cầu trong spec, và danh sách task chia theo phase.
- Mỗi task có mã (ví dụ `AUTH-05`), checkbox, phần (BE/FE/Infra/Docs), tiêu chí hoàn thành.
- Làm xong thì đánh dấu `[x]` và ghi link PR. Đổi phạm vi thì sửa file và ghi vào "Lịch sử thay đổi".
- File task chỉ nói **làm gì và khi nào xong**. **Làm như thế nào** nằm trong tài liệu kiến trúc.

| File | Tính năng | Trạng thái |
| --- | --- | --- |
| [auth.md](./auth.md) | Đăng ký, đăng nhập (email, Google, passkey), quên mật khẩu | Chưa bắt đầu |
