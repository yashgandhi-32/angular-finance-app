import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Account} from './account.model';

@Component({
  selector: 'accounts-list',
  templateUrl: './accounts_list.component.html',
  styleUrls: ['./accounts_list.component.html']
})
export class AccountsList {
  @Input('accounts') _accounts: Array<Account>;

  @Input('selected') _selected: Array<boolean>;

  @Input() edit: boolean;

  @Output('delete') delete = new EventEmitter();

  @Output('sendata') sendata = new EventEmitter();

  @Output('toggle') toggleval = new EventEmitter();

  @Output('select') select = new EventEmitter();

  @Output('details') details = new EventEmitter();

  private _select( acc: Account) {
    this.select.emit({ acc });
  }
  private _remove(index: number) {
    this.delete.emit(index);
  }
  private toggleeditval() {
    this.edit = !this.edit;
  }
  private editField(i: any, id: any, title: any, desc: any, bal: any, name: any) {
    this.edit = true;
    this.sendata.emit({ i, id, desc: desc.value, title, bal: bal.value, name });
  }
}
