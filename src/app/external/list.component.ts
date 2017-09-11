import { Component, ViewChild, ElementRef, Optional} from '@angular/core';
import { Account } from './account.model';
import {AccountsService} from './account.services';
import {AccountForm } from './account_form.component';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: './list.component.html'
})
export class ListComponent {
  constructor( @Optional() private _accountService: AccountsService, private _router: Router, private _route: ActivatedRoute) {
    this._accounts = this._accountService._accounts;
    this.edit = this._accountService.edit;
  }

  private _accounts: Array<Account>;
  private edit: boolean;
  private _selected: any;

  private removeAcc(index: number) {
    this._accountService.removeAcc(index);
  }
  private select(account: any) {
    this._router.navigate(['accounts', account.acc.id]);
  //  this._router.navigate(['../', account.acc.id], { relativeTo: this._route });
  }
  private editField(event: any) {
    this._accountService.editField(event);
  }
}
