# Architecture: kiến trúc của dự án

Thư mục này lưu các tài liệu mô tả **dự án được xây dựng như thế nào**.

## Nên đặt gì ở đây

- Tổng quan hệ thống và cách các phần giao tiếp với nhau.
- Cấu trúc thư mục và quy ước code của từng phần (web, backend).
- Các quyết định kiến trúc quan trọng (ADR), mỗi quyết định một file, ví dụ `adr-001-chon-database.md`.
- Sơ đồ (luồng dữ liệu, mô hình dữ liệu, triển khai).

## Phiên bản kiến trúc

Mỗi phiên bản kiến trúc là một file `vN.md` (`v1.md`, `v2.md`, ...).

- Khi kiến trúc thay đổi lớn, tạo file phiên bản mới thay vì sửa phiên bản cũ. File mới ghi rõ nó thay thế phiên bản nào và thay đổi gì.
- Phiên bản cũ giữ nguyên nội dung, chỉ cập nhật dòng trạng thái thành `Đã thay thế bởi vN`.
- Sửa nhỏ (lỗi chính tả, làm rõ ý) thì sửa thẳng và ghi vào mục "Lịch sử thay đổi" cuối file.
- Trạng thái của một phiên bản: `Đề xuất`, `Đã chốt`, `Đã thay thế bởi vN`.

| Phiên bản | Trạng thái | Tóm tắt |
| --- | --- | --- |
| [v1](./v1.md) | Đề xuất | Kiến trúc đơn giản cho MVP: React SPA, Express modular monolith, PostgreSQL, object storage cho audio/ảnh |

## Tài liệu khác

- [overview.md](./overview.md): mô tả cấu trúc code đang có trong repo (web và backend).
- [auth.md](./auth.md): thiết kế xác thực (email + mật khẩu, Google, passkey, CAPTCHA, quên mật khẩu). Task triển khai ở [tasks/auth.md](../tasks/auth.md).
