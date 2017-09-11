import { NgForm } from '@angular/forms';
import { Component, ViewChild, ElementRef, Optional, Injectable} from '@angular/core';
import { LoggerService }  from '../util/logger.service';
import { Account } from './account.model';

@Injectable()
export class AccountsService {
  constructor( @Optional() private _logger: LoggerService) {

  }
  public _accounts: Array<Account> = [new Account(1, "Saving Account", "This is my account", 6866, "Akshat"),new Account(2, "Current Account", "I love money", 6866, "Yash")];

  public edit: boolean = true;

  public _nextId = 3;

  public getById(accountId: number):Promise<Account> {
    return new Promise((resolve, reject) => {
      var found = this._accounts.find(acc => acc.id == accountId);
      if (!found) {
        reject('No account with this id');
      } else
        resolve(found);
    });
  }
  public editField(event: any) {
    this._accounts[event.i] = new Account(event.id, event.title, event.desc, event.bal, event.name);
    this.edit = !this.edit;
  }
  public createAcc(event: any) {
    return new Promise((resolve, reject) => {
      if (this._accounts.length >= 3) {
        reject("Max 3 Accounts Possible");
      } else {
        console.log(event.title)
        this._accounts.push(new Account(this._nextId, event.title, event.desc, event.balance, event.name));
        this.edit = true;
        this._nextId++;
      }
      resolve('Account created ' + event.name);
    });
  }
  public removeAcc(index: number) {
    var val: string = this._accounts[index].name;
    this._accounts.splice(index, 1);
    this._nextId--;
    this._logger.logg(val);
  }
}
