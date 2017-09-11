import {Component, Output, Input, EventEmitter, ViewChild} from'@angular/core';
import {Account} from './account.model'

@Component({
  selector: 'account-form',
  templateUrl: './account_form.component.html',
  styleUrls:['./account_form.component.css']
})
export class AccountForm {
  @Output('create') create = new EventEmitter();
  @ViewChild('myForm') form: any;

  public  maxshow:boolean = false;

  public resetform() {
   this.form.nativeElement.reset();
  }
  private createAcc(title: any, event: any, desc: any, balance: any, name: any) {
    event.preventDefault();
    this.create.emit({ title: title.value, desc: desc.value, balance: balance.value, name: name.value });
  }
}
