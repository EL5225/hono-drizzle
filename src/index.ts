import { Hono } from "hono";
import { router } from "@/routers";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/api", router);

app.notFound((c) => {
  return c.json({ message: "Not Found" }, 404);
});

app.onError((err, c) => {
  return c.json({ message: err.message }, 500);
});

export default {
  port: process.env.PORT || 3000,
  fetch: app.fetch,
};
