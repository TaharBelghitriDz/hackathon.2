import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";

const swaggerMidlware = () => {};

const app = new Elysia()
  .use(cors())
  .use(swagger({ path: "/" }))
  .post("/sign-in", ({ body }) => body)
  // .get("/", () => "hi")
  .post("/hello", () => "world")
  // .get("/")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
