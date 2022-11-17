import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { getAllTransactions, getCreditedTransactions, getDebitedTransactions, newTransaction } from "../controllers/transactionsController.js";

const transactionsRouter = Router();

transactionsRouter.use(validateToken);

transactionsRouter.get("/transactions", getAllTransactions);
transactionsRouter.get("/debited-transactions", getDebitedTransactions);
transactionsRouter.get("/credited-transactions", getCreditedTransactions);
transactionsRouter.post("/transactions", newTransaction);

export default transactionsRouter;