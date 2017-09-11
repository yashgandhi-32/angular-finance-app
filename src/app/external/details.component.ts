import { Component, OnInit, OnDestroy} from '@angular/core';
import { Account } from './account.model';
import {AccountsService} from './account.services';
import {ActivatedRoute} from '@angular/router';
import {Transaction} from '../transaction/transaction.model';
import {TransactionService} from '../transaction/transaction.service';


@Component({
  templateUrl: './details.component.html',
  styleUrls:['./details.component.css'],
})

export class DetailsComponent implements OnInit, OnDestroy {
  private _accounts: Promise<Account>;
  private _error: string='';
  private _tagSearchQuery:string="";
  private _paramSub: any;
  private _trans: Array<Transaction> = [];
  private id:number;

  constructor(private _accountService: AccountsService, private _route: ActivatedRoute, private _transactionService: TransactionService) {

  }

  public ngOnInit() {
    this._paramSub = this._route.params.subscribe(params => {
      this.id = +params['id'];
      this._accounts = null;
      this._error = "";
      this._accounts = this._accountService.getById(this.id).catch(err => this._error = err);
      console.log(this._accounts);
      this._transactionService.getByAccount(this.id).then(trans => this._trans = trans);
    });
  }
  private isObject(obj:any){
    return typeof 'object' == obj;
  }
  public ngOnDestroy() {
    this._paramSub.unsubscribe();
  }
  private searchtag(query:any){
     this._tagSearchQuery = query.value;
  }
}
