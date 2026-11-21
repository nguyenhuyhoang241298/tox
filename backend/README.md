# backend

Backend của TOX: Express 5 + TypeScript, Zod, OpenAPI (Swagger UI), Pino. Kiểm thử bằng Vitest + Supertest, lint và format bằng Biome.

Dựng từ boilerplate [edwinhern/express-typescript](https://github.com/edwinhern/express-typescript) (giấy phép MIT, xem `LICENSE`).

## Chạy

Cần Node 24 LTS và pnpm (phiên bản ghi trong `.tool-versions` ở gốc repo).

```bash
pnpm install
cp .env.template .env
pnpm start:dev
```

Mặc định backend chạy ở `http://localhost:8080` và cho phép CORS từ web ở `http://localhost:5173`.

- API: `http://localhost:8080/api/v1/...` (ví dụ `GET /api/v1/health-check`, `GET /api/v1/users`)
- Swagger UI: `http://localhost:8080/`, OpenAPI JSON: `http://localhost:8080/swagger.json`

Scripts: `start:dev`, `build`, `start:prod`, `check` (Biome, tự sửa), `test`, `test:cov`.

## Cấu trúc

Chia theo module nghiệp vụ trong `src/api/`, mỗi module gồm Router → Controller → Service → Repository. Chi tiết xem [docs/architecture/overview.md](../docs/architecture/overview.md) và [docs/architecture/v1.md](../docs/architecture/v1.md).
