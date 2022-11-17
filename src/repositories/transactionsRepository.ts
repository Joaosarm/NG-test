import { prisma } from "../config/database.js";


export async function insert(debitedAccountId: number, creditedAccountId: number, value: number) {
    await prisma.transactions.create({ data: {debitedAccountId, creditedAccountId, value}});
}

export async function getAllTransactions(id: number) {
    const userTransactions = await prisma.transactions.findMany({
         where: { 
            OR: [
                { debitedAccountId: id },
                { creditedAccountId: id }
              ]
          },
         select:{
             debitedAccountId: true,
             creditedAccountId: true,
             value: true,
             createdAt: true,
         },
        });
    return userTransactions;
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