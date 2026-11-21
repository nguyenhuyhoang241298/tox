# Thiết kế giao diện

Thư mục này mô tả phong cách thiết kế thống nhất của TOX.

- [DESIGN.md](./DESIGN.md): đặc tả đầy đủ (token màu, chữ, khoảng cách, component, quy tắc). Viết
  bằng tiếng Anh để công cụ AI làm theo chính xác và giữ nguyên tên token.

## Tóm tắt

- **Phong cách chính: Calm Clean.** Phẳng, nhiều khoảng trắng, nền off-white `#FAFAF7`, chữ gần đen
  `#0F172A`, một màu nhấn xanh dương `#2563EB`. Giao diện "tàng hình" để người học tập trung vào câu
  hỏi khi làm bài có tính giờ.
- **Chế độ đọc (Editorial)** cho đoạn văn Reading, giải thích, transcript: nền giấy `#FBF8F1`, font
  serif Literata 19–20px, line-height 1.7, mỗi dòng tối đa 62 ký tự.
- **Font:** Be Vietnam Pro cho giao diện, Literata cho đoạn văn. Cả hai tự host qua Fontsource và
  có subset tiếng Việt.
- **Dark mode** theo hệ điều hành: nền `#121212`, màu nhấn `#60A5FA`.
- **Tiếp cận (WCAG 2.2):** tương phản chữ ≥ 4.5:1, vùng chạm ≥ 44px, focus ring luôn hiện, không dùng
  màu làm tín hiệu duy nhất (đúng/sai luôn có icon và chữ).

## Áp dụng trong code

| Nội dung | Vị trí |
|---|---|
| Token (CSS variables + Tailwind `@theme`) | `web/src/app/styles/index.css` |
| Component dùng chung | `web/src/shared/ui` (Button, Card, Input, Badge, ProgressBar, AnswerOption, ReadingPassage) |
| Trang kitchen sink (mọi component, mọi trạng thái) | `/dev/ui`, chỉ có khi chạy `pnpm dev` |
| Chặn màu hardcode | `pnpm check:tokens` (chạy trong CI) |

Quy tắc quan trọng nhất: trong component **chỉ dùng token ngữ nghĩa** (`bg-primary`,
`text-muted-foreground`, `text-body`, `rounded-md`…), không viết mã màu hay class bảng màu Tailwind
như `bg-blue-600`. Khi đổi token, sửa `index.css` và `DESIGN.md` trong cùng một commit.

Nguồn: tài liệu nghiên cứu phong cách thiết kế Hoàng chia sẻ ngày 21/11/2026, chọn Style A (Calm
Clean) làm hệ thống chính và Style E (Editorial) làm chế độ đọc, đúng như tài liệu khuyến nghị.
