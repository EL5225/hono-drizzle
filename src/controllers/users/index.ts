import { TUsers, db, users } from "@/libs";
import { Context } from "hono";
import { TUsersResponse } from "./types";
import { eq } from "drizzle-orm";
import { TPublicResponse } from "@/utils";

export const getAllUser = async (c: Context) => {
  const users = await db.query.users.findMany({
    columns: {
      id: true,
      name: true,
      email: true,
      created_at: true,
      updated_at: true,
    },
  });

  return c.json<TUsersResponse>({ message: "Success", data: users }, 200);
};

export const createUser = async (c: Context) => {
  const body = await c.req.json<TUsers>();

  const existUser = await db.query.users.findFirst({
    where: eq(users.email, body.email),
  });

  if (existUser) {
    return c.json<TPublicResponse>({ message: "User already exist" }, 400);
  }

  const hashedPassword = await Bun.password.hash(body.password);

  await db.insert(users).values({
    name: body.name,
    email: body.email,
    password: hashedPassword,
  });

  return c.json<TPublicResponse>({ message: "User created" }, 200);
};
