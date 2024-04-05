import { Hono } from "hono";
import { usersRouter } from "./users";

export const router = new Hono();

router.route("/users", usersRouter);
