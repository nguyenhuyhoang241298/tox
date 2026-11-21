# TOX

Web app thi thử TOEIC Listening & Reading: làm đề giống thi thật trên máy tính và điện thoại, xem điểm ước tính và giải thích chi tiết từng câu.

## Cấu trúc thư mục

```
vietlearn/      # tên repo trên GitHub (dự kiến đổi thành tox)
├── web/       # Frontend (giao diện người dùng)
├── backend/   # Backend (API, xử lý dữ liệu)
└── docs/      # Tài liệu: yêu cầu (spec) và kiến trúc (architecture)
```

## Tài liệu

- [Spec – Tài liệu yêu cầu ban đầu](docs/spec/yeu-cau-ban-dau.md)
- [Kiến trúc v1 (đề xuất)](docs/architecture/v1.md)
- [Tổng quan code hiện có](docs/architecture/overview.md)

## Chạy local

Cần Node 24 LTS và pnpm (phiên bản trong `.tool-versions`).

```bash
# Backend: http://localhost:8080 (API dưới /api/v1, Swagger UI ở /)
cd backend && pnpm install && cp .env.template .env && pnpm start:dev

# Web: http://localhost:5173, gọi API qua VITE_API_URL
cd web && pnpm install && cp .env.example .env && pnpm dev
```

CI (GitHub Actions, `.github/workflows/ci.yml`) chạy lint, test và build cho cả `web/` và `backend/` ở mỗi push lên `main` và mỗi pull request.
