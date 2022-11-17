import { Request, Response } from "express";
import * as accountServices from "../services/accountServices.js";

export async function getBalance(req: Request, res: Response) {
    let { userId } = res.locals;
    userId = parseInt(userId);

    const balance = await accountServices.getBalance(userId);
    res.status(200).send(balance);
}