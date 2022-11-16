import { accounts } from "@prisma/client";
import { prisma } from "../config/database.js";


export async function insert() {
  const account = await prisma.accounts.create({ data: {balance: 100}});
  return account;
}

// export async function findByUsername(username: string) {
//   const user = await prisma.users.findFirst({ where: { username } });
//   return user;
// }