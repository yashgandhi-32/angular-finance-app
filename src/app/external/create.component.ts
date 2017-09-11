import { Component, ViewChild, ElementRef, Optional} from '@angular/core';
import { Account } from './account.model';
import {AccountsService} from './account.services';
import {AccountForm } from './account_form.component';

@Component({
  templateUrl:'./create.component.html'
})
export class CreateComponent{
  constructor( @Optional() private _accountService: AccountsService) {

  }
  @ViewChild(AccountForm) form: AccountForm;
  private createAcc(event: any) {
    this._accountService.createAcc(event).then((res) => {
      alert(res);
      this.form.resetform();
    }).catch(err => { this.form.maxshow = true; });
  }
}
