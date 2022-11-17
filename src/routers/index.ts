import { Router } from "express";
import accountRouter from "./accountRouter.js";
import authRouter from "./authRouter.js";
import transactionsRouter from "./transactionsRouter.js";


const router = Router();

router.use(authRouter);
router.use(transactionsRouter);
router.use(accountRouter);

export default router;