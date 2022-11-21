import { Router } from "express";
import { validateToken } from "../middlewares/validateToken.js";
import { getBalance } from "../controllers/accountController.js";
var accountRouter = Router();
accountRouter.use(validateToken);
accountRouter.get("/balance", getBalance);
export default accountRouter;
