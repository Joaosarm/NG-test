import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { getTransactions, newTransaction } from "../controllers/transactionsController.js";

const transactionsRouter = Router();

transactionsRouter.use(validateToken);

transactionsRouter.get("/transactions", getTransactions);
transactionsRouter.post("/transactions", newTransaction);

export default transactionsRouter;