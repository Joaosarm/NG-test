import * as transactionsRepository from "../repositories/transactionsRepository.js";
import * as transactionsUtils from "../utils/transactionsUtils.js";

export async function getTransactions(id: number){
    const transactions = await transactionsRepository.getAllTransactions(id);
    return transactions;
}

export async function newTransaction(debitedAccountId: number, creditedAccount: string, value: number){
    await transactionsUtils.CheckBalance(debitedAccountId, value);
    const creditedAccountId = await transactionsUtils.GetUserAccountId(creditedAccount);
    await transactionsUtils.CheckIfDifferentUser(debitedAccountId, creditedAccountId);

    await transactionsRepository.insert(debitedAccountId, creditedAccountId, value);

    await transactionsUtils.updateAccounts(debitedAccountId, creditedAccountId, value);
}