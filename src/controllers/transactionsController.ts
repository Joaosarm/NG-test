import { Request, Response } from "express";
import * as transactionsServices from "../services/transactionsServices.js";

export async function getTransactions(req: Request, res: Response) {
    let { userId } = res.locals;
    userId = parseInt(userId);

    const transactions = await transactionsServices.getTransactions(userId);
    res.status(200).send(transactions);
}

export async function newTransaction(req: Request, res: Response) {
    let { userId } = res.locals;
    const debitedAccountId = parseInt(userId);

    const {value, creditedAccount} = req.body;

    await transactionsServices.newTransaction(debitedAccountId, creditedAccount, value);
    res.sendStatus(201);
}