import { Hono } from "hono";
import { createUser, getAllUser } from "@/controllers";

export const usersRouter = new Hono();

usersRouter.get("/", getAllUser);
usersRouter.post("/", createUser);
