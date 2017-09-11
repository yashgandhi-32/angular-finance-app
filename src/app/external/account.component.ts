import { NgForm } from '@angular/forms';
import { Component, ViewChild, ElementRef, Optional} from '@angular/core';
import { LoggerService }  from '../util/logger.service';
import { Account } from './account.model';
import {AccountsService} from './account.services';
import {AccountForm } from './account_form.component';
import{TransactionService} from  '../transaction/transaction.service'

@Component({
  selector: 'accountapp',
  templateUrl: './account.component.html',
  providers: [AccountsService, LoggerService,TransactionService],
})
export class AccountComponent {

  // private _accounts: Array<Account> = [];
  //
  // @ViewChild(AccountForm) form: AccountForm;
  //
  // constructor( @Optional() private _accountService: AccountsService) {
  //   this._accounts = this._accountService._accounts;
  // }
  // private edit: boolean = this._accountService.edit;
  //
  // private _selected = this._accountService._selected;
  //
  // private createAcc(event: any) {
  //   this._accountService.createAcc(event).then((res) => {
  //     console.log(res);
  //     this.form.resetform();
  //   }).catch(err => { this.form.maxshow = true; });
  // }
  // private removeAcc(index: number) {
  //   this.form.maxshow = false;
  //   this._accountService.removeAcc(index);
  // }
  // private select(index: any) {
  //   this._accountService.select(index);
  // }
  // private editField(event: any) {
  //   this._accountService.editField(event);
  // }
}
