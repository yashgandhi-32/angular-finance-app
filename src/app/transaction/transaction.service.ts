import {Injectable} from '@angular/core';
import {Transaction} from './transaction.model';
import {Account} from '../external/account.model';

@Injectable()
export class TransactionService {
  private _transactions: Array<Transaction> = [
    { id: "1", value: -500 , description: "Bought new phone", date: new Date(), tags: ["red"], accountId: 1 },
    { id: "2", value: 320, description: "Enjoy", date: new Date(), tags: ["happy"], accountId: 1 },
    { id: "1", value: 500 , description: "I own startup", date: new Date(), tags: ["money"], accountId:2 },
    { id: "2", value: 220, description: "Grocery", date: new Date(), tags: ["maggi","chocolate"], accountId: 2 },
    //{ id: "3", value: 900, description: "something elseee", date: new Date(), tags: ["haha"], accountId: 3 },
  ]
  public getByAccount(accountId: number): Promise<Array<Transaction>> {
    return new Promise((resolve, reject) => {
      resolve(this._transactions.filter(tran => tran.accountId == accountId));
    });
  }
}
