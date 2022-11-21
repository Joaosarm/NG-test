import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { signInSchema, signUpSchema } from "../schemas/schemas.js";
import { signIn, signUp } from "../controllers/authController.js";
var authRouter = Router();
authRouter.post("/sign-up", validateSchema(signUpSchema), signUp);
authRouter.post("/sign-in", validateSchema(signInSchema), signIn);
export default authRouter;
