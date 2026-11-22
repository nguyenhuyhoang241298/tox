# Tổng quan kiến trúc

> Trạng thái: mô tả code hiện có trong repo, cập nhật khi cấu trúc thay đổi.

TOX là một monorepo gồm hai phần độc lập:

```
vietlearn/      # repo (dự kiến đổi tên thành tox)
├── web/       # Frontend: React + TypeScript + Vite
├── backend/   # Backend: Express + TypeScript
└── docs/      # Tài liệu
```

Web gọi backend qua HTTP (REST API, tiền tố `/api/v1`). Khi chạy local, web ở `http://localhost:5173`, backend ở `http://localhost:8080`; web đọc địa chỉ backend từ `VITE_API_URL`, backend cho phép CORS theo `CORS_ORIGIN`.

Node 24 LTS và pnpm, phiên bản ghi trong `.tool-versions` ở gốc repo. CI ở `.github/workflows/ci.yml` chạy cho cả hai phần.

## Web (`web/`)

**Công nghệ:** React 19, TypeScript, Vite, React Router, TanStack Query (dữ liệu từ server), Zustand (state phía client), Zod, Tailwind CSS v4, shadcn/ui. Kiểm thử bằng Vitest + Testing Library, lint bằng oxlint, format bằng Prettier.

**Kiến trúc:** [Feature-Sliced Design (FSD)](https://feature-sliced.design/). Code được chia theo layer, layer trên chỉ được import từ layer dưới:

```
web/src/
├── app/       # Khởi tạo ứng dụng: provider, router, style toàn cục
├── pages/     # Mỗi trang là một slice: landing (trang giới thiệu cho khách), home (trang chủ học viên),
│   │          # coming-soon (trang chờ cho tính năng chưa làm), dev-ui (kitchen sink, chỉ khi dev)
│   └── landing/
│       ├── ui/      # Component của trang
│       ├── config/  # Nội dung tĩnh (tính năng, bảng giá, hỏi đáp)
│       └── index.ts # Public API của slice
├── entities/  # Thực thể nghiệp vụ dùng chung (hiện có: session = trạng thái đăng nhập, Zustand store)
└── shared/    # Code dùng chung, không phụ thuộc nghiệp vụ
    ├── ui/      # Component dùng chung theo design system (button, card, input, badge, progress-bar, answer-option, reading-passage)
    ├── api/     # Cấu hình TanStack Query
    ├── config/  # Biến môi trường, danh sách route (ROUTES), cấu hình test
    └── lib/     # Tiện ích (ví dụ hàm cn)
```

Route `/` hiển thị `landing` khi chưa đăng nhập và `home` khi đã đăng nhập (`app/root-page.tsx`). Các route của tính năng chưa làm (`/login`, `/register`, `/tests`, …) tạm hiển thị `coming-soon`; khai báo trong `app/router.tsx`, thay bằng trang thật khi làm xong.

Các layer `widgets/`, `features/` của FSD sẽ được thêm khi cần. Mỗi slice chỉ xuất ra ngoài qua `index.ts`. Quy tắc FSD được kiểm tra bằng Steiger (`pnpm arch`).

## Backend (`backend/`)

**Công nghệ:** Express 5, TypeScript, Zod (validate), zod-to-openapi + Swagger UI (tài liệu API), Pino (log), Helmet, express-rate-limit. Kiểm thử bằng Vitest + Supertest, lint và format bằng Biome.

**Kiến trúc:** chia theo module tính năng, mỗi module có các lớp Router → Controller → Service → Repository:

```
backend/src/
├── index.ts        # Điểm khởi động server
├── server.ts       # Tạo app Express, gắn middleware và route
├── api/            # Các module tính năng
│   ├── healthCheck/  # GET /api/v1/health-check
│   └── users/        # /api/v1/users
│       ├── userRouter.ts      # Khai báo route + tài liệu OpenAPI
│       ├── userController.ts  # Nhận request, trả response
│       ├── userService.ts     # Logic nghiệp vụ
│       ├── userRepository.ts  # Truy cập dữ liệu (hiện là dữ liệu mẫu trong bộ nhớ)
│       └── userModel.ts       # Schema Zod và kiểu dữ liệu
├── api-docs/       # Sinh tài liệu OpenAPI, phục vụ Swagger UI
└── common/
    ├── middleware/ # errorHandler, rateLimiter, requestLogger
    ├── models/     # ServiceResponse: định dạng response thống nhất
    └── utils/      # envConfig, validate request, helper HTTP
```

Thứ tự middleware trong `server.ts`: JSON/urlencoded parser → CORS → Helmet → rate limiter → request logger → route `/api/v1` → Swagger UI (`/`, `/swagger.json`) → error handler.

Rate limit tính theo IP: mặc định 300 request mỗi 60 giây (`COMMON_RATE_LIMIT_MAX_REQUESTS`, `COMMON_RATE_LIMIT_WINDOW_MS`). `TRUST_PROXY` là số reverse proxy đứng trước backend (0 khi chạy local), để IP lấy từ `X-Forwarded-For` không bị giả.

Hiện backend chưa có database, `userRepository` dùng dữ liệu mẫu trong bộ nhớ.
