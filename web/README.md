# web

Frontend của TOX: React 19 + TypeScript + Vite 8, TanStack Query, Zustand, Tailwind CSS 4, cấu trúc theo [Feature-Sliced Design](https://feature-sliced.design) v2.1.

## Chạy

```bash
pnpm install
cp .env.example .env
pnpm dev
```

Scripts: `dev`, `build`, `typecheck`, `lint` (oxlint), `arch` (steiger, kiểm tra FSD), `check:tokens` (chặn màu hardcode), `test` (vitest), `format`.

## Cấu trúc

```
src/
├── app/      # providers (QueryClient, ErrorBoundary), router, styles
├── pages/    # mỗi trang tự chứa ui/, model/, api/ (pages first)
├── shared/   # api client, config (env Zod), lib, ui
└── main.tsx
```

Quy ước: alias `@/*` trỏ vào `src/*`; server state nằm trong TanStack Query, Zustand chỉ giữ client state (trong segment `model`); chỉ tách `features/`, `entities/`, `widgets/` khi code thực sự được dùng lại ở nhiều nơi.

shadcn/ui: component nằm ở `src/shared/ui` (alias trong `components.json`: `ui` → `@/shared/ui`, `utils` → `@/shared/lib/utils`). Thêm component mới bằng `pnpm dlx shadcn@latest add <tên>`; import qua public API `@/shared/ui`.

## Giao diện

Mọi giao diện theo [design system](../docs/design/DESIGN.md): token trong `src/app/styles/index.css`, component dùng chung trong `src/shared/ui`, chỉ dùng token ngữ nghĩa (không hardcode màu). Trang kitchen sink `/dev/ui` (chỉ khi `pnpm dev`) hiển thị mọi component ở mọi trạng thái.
