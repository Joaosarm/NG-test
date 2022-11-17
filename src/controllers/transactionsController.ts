import { Request, Response } from "express";
import * as transactionsServices from "../services/transactionsServices.js";

export async function getAllTransactions(req: Request, res: Response) {
    let { userId } = res.locals;
    userId = parseInt(userId);

    const transactions = await transactionsServices.getAllTransactions(userId);
    res.status(200).send(transactions);
}

export async function newTransaction(req: Request, res: Response) {
    let { userId } = res.locals;
    const debitedAccountId = parseInt(userId);

    const {value, creditedAccount} = req.body;

    await transactionsServices.newTransaction(debitedAccountId, creditedAccount, value);
    res.sendStatus(201);
}

export async function getDebitedTransactions(req: Request, res: Response) {
    let { userId } = res.locals;
    userId = parseInt(userId);

    const debitedTransactions = await transactionsServices.getDebitedTransactions(userId);
    res.status(200).send(debitedTransactions);
}

export async function getCreditedTransactions(req: Request, res: Response) {
    let { userId } = res.locals;
    userId = parseInt(userId);

    const creditedTransactions = await transactionsServices.getCreditedTransactions(userId);
    res.status(200).send(creditedTransactions);
}