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