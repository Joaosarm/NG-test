import * as transactionsRepository from "../repositories/transactionsRepository.js";
import * as transactionsUtils from "../utils/transactionsUtils.js";

export async function getAllTransactions(id: number){
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

export async function getDebitedTransactions(id: number){
    const debitedTransactions = await transactionsRepository.getDebitedTransactions(id);
    return debitedTransactions;
}

export async function getCreditedTransactions(id: number){
    const creditedTransactions = await transactionsRepository.getCreditedTransactions(id);
    return creditedTransactions;
}