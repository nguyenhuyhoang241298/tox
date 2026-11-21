# Tổng quan kiến trúc

> Trạng thái: mô tả code hiện có trong repo, cập nhật khi cấu trúc thay đổi.

TOX là một monorepo gồm hai phần độc lập:

```
tox/
├── web/       # Frontend: React + TypeScript + Vite
├── backend/   # Backend: Express + TypeScript
└── docs/      # Tài liệu
```

Web gọi backend qua HTTP (REST API). Backend bật CORS theo biến môi trường `CORS_ORIGIN`.

## Web (`web/`)

**Công nghệ:** React 19, TypeScript, Vite, React Router, TanStack Query (dữ liệu từ server), Zustand (state phía client), Zod, Tailwind CSS v4, shadcn/ui. Kiểm thử bằng Vitest + Testing Library, lint bằng oxlint, format bằng Prettier.

**Kiến trúc:** [Feature-Sliced Design (FSD)](https://feature-sliced.design/). Code được chia theo layer, layer trên chỉ được import từ layer dưới:

```
web/src/
├── app/       # Khởi tạo ứng dụng: provider, router, style toàn cục
├── pages/     # Mỗi trang là một slice (hiện có: home)
│   └── home/
│       ├── ui/      # Component của trang
│       ├── model/   # State của trang (Zustand store)
│       └── index.ts # Public API của slice
└── shared/    # Code dùng chung, không phụ thuộc nghiệp vụ
    ├── ui/      # Component shadcn/ui (button, card, input)
    ├── api/     # Cấu hình TanStack Query
    ├── config/  # Biến môi trường, cấu hình test
    └── lib/     # Tiện ích (ví dụ hàm cn)
```

Các layer `widgets/`, `features/`, `entities/` của FSD sẽ được thêm khi cần. Mỗi slice chỉ xuất ra ngoài qua `index.ts`. Quy tắc FSD được kiểm tra bằng Steiger (`npm run arch`).

## Backend (`backend/`)

**Công nghệ:** Express 5, TypeScript, Zod (validate), zod-to-openapi + Swagger UI (tài liệu API), Pino (log), Helmet, express-rate-limit. Kiểm thử bằng Vitest + Supertest, lint và format bằng Biome.

**Kiến trúc:** chia theo module tính năng, mỗi module có các lớp Router → Controller → Service → Repository:

```
backend/src/
├── index.ts        # Điểm khởi động server
├── server.ts       # Tạo app Express, gắn middleware và route
├── api/            # Các module tính năng
│   ├── healthCheck/  # GET /health-check
│   └── user/         # /users
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

Thứ tự middleware trong `server.ts`: JSON/urlencoded parser → CORS → Helmet → rate limiter → request logger → route → Swagger UI → error handler.

Hiện backend chưa có database, `userRepository` dùng dữ liệu mẫu trong bộ nhớ.
