import cors from "cors";
import express, { type Express } from "express";
import helmet from "helmet";
import { pino } from "pino";
import { healthCheckRouter } from "@/api/healthCheck/healthCheckRouter";
import { userRouter } from "@/api/users/userRouter";
import { openAPIRouter } from "@/api-docs/openAPIRouter";
import errorHandler from "@/common/middleware/errorHandler";
import rateLimiter from "@/common/middleware/rateLimiter";
import requestLogger from "@/common/middleware/requestLogger";
import { env } from "@/common/utils/envConfig";

const logger = pino({ name: "server start" });
const app: Express = express();

// Số reverse proxy đứng trước app (0 khi chạy local). Không dùng `true`,
// vì khi đó client có thể giả IP qua header X-Forwarded-For để né rate limit.
app.set("trust proxy", env.TRUST_PROXY);

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(helmet());
app.use(rateLimiter);

// Request logging
app.use(requestLogger);

// Routes: mọi API nằm dưới tiền tố /api/v1 (docs/architecture/v1.md)
const apiV1 = express.Router();
apiV1.use("/health-check", healthCheckRouter);
apiV1.use("/users", userRouter);
app.use("/api/v1", apiV1);

// Swagger UI
app.use(openAPIRouter);

// Error handlers
app.use(errorHandler());

export { app, logger };
