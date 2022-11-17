import * as accountRepository from "../repositories/accountRepository.js";

export async function CheckBalance(id: number, value: number) {
    const {accounts} = await accountRepository.getBalance(id);
    if (accounts.balance < value) {
        throw {
        type: "Invalid requisition",
        message: "Not enough balance to transfer",
        status: 409
      }
    }
  }

  export async function GetUserAccountId(username: string) {
    const exists = await accountRepository.getUserAccountId(username);
    if (!exists) {
        throw {
            type: "Invalid requisition",
            message: "Username does not exist",
            status: 409
          }
    } else{
        return exists.accounts.id;
    }
  }
  
  export async function CheckIfDifferentUser(debitedAccountId: number, creditedAccountId: number) {
    if (debitedAccountId == creditedAccountId) {
        throw {
        type: "Invalid requisition",
        message: "One cannot transfer to themself",
        status: 409
      }
    }
  }
  
  export async function updateAccounts(debitedAccountId: number, creditedAccountId: number, value: number) {
    await accountRepository.updateAccount(debitedAccountId, -value);
    await accountRepository.updateAccount(creditedAccountId, value);
  }