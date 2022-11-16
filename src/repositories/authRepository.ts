import { users } from "@prisma/client";
import { prisma } from "../config/database.js";

export type CreateUserData = Omit<users, "id">;


export async function findByUsername(username: string) {
  const user = await prisma.users.findFirst({ where: { username } });
  return user;
}

export async function insert(UserData: CreateUserData) {
  const user = await prisma.users.create({ data: UserData});
  return user;
}