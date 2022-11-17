import * as accountRepository from "../repositories/accountRepository.js";

export async function getBalance(id: number){
    const {accounts} = await accountRepository.getBalance(id);
    return accounts;
}