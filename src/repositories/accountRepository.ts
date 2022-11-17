import { prisma } from "../config/database.js";


export async function insert() {
  const account = await prisma.accounts.create({ data: {balance: 100}});
  return account;
}

export async function getBalance(id: number) {
  const userAccount = await prisma.users.findUnique({
       where: { id },
       select:{
           accounts: {
               select:{
                   balance: true
               }
           }
       }
      });
  return userAccount;
}

export async function getUserAccountId(username: string) {
  const user = await prisma.users.findFirst({
       where: { username},
       select: {
          accounts: {
              select:{
                  id: true
              }
          }
       } 
      });
  return user;
}

export async function updateAccount(accountId: number, value: number) {
  const {accounts} = await getBalance(accountId); 
  const newBalance = accounts.balance + value;
  await prisma.accounts.update({
      where: {
          id: accountId
      },
      data: {
          balance: newBalance
      }
  })
}