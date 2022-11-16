import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as authUtils from "../utils/authUtils.js";
import * as authRepository from "../repositories/authRepository.js"
import * as accountRepository from "../repositories/accountRepository.js"
import { CreateUserData } from "../repositories/authRepository.js";

export async function signUp(userData : CreateUserData){
    const {username, password} = userData;
    await authUtils.checkUserExistance(username);
    const account = await accountRepository.insert();
    const encryptedPassword = bcrypt.hashSync(password, parseInt(process.env.BCRYPT_KEY));
    await authRepository.insert({username, password: encryptedPassword, accountId: account.id});
}

export async function signIn(userData : CreateUserData){
    const {username, password} = userData;
    const user = await authUtils.getUser(username);
    await authUtils.checkPassword(password, user.password);
    const token = jwt.sign(`${user.id}`, process.env.JWT_SECRET as string);
    return {token};
}