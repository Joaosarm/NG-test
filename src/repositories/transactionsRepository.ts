import { prisma } from "../config/database.js";


export async function insert(debitedAccountId: number, creditedAccountId: number, value: number) {
    await prisma.transactions.create({ data: { debitedAccountId, creditedAccountId, value } });
}

export async function getAllTransactions(id: number) {
    const userTransactions = await prisma.transactions.findMany({
        where: {
            OR: [
                { debitedAccountId: id },
                { creditedAccountId: id }
            ]
        },
    });
    return userTransactions;
}

export async function getDebitedTransactions(id: number) {
    const userDebitedTransactions = await prisma.transactions.findMany({
        where: { debitedAccountId: id },
        select: {
            debitedAccountId: true,
            creditedAccountId: true,
            value: true,
            createdAt: true,
        },
    });
    return userDebitedTransactions;
}

export async function getCreditedTransactions(id: number) {
    const userCreditedTransactions = await prisma.transactions.findMany({
        where: { creditedAccountId: id },
        select: {
            debitedAccountId: true,
            creditedAccountId: true,
            value: true,
            createdAt: true,
        },
    });
    return userCreditedTransactions;
}