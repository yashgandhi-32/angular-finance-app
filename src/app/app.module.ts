import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AccountsList} from './external/accounts_list.component';
import { AppComponent }  from './app.component';
import {AccountComponent} from './external/account.component';
import {LoggerService} from './util/logger.service';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import { PageNotFoundComponent} from './external/pagenotfound.component';
import {AccountsService} from './external/account.services';
import {AccountForm} from './external/account_form.component';
import {ListComponent} from './external/list.component';
import {CreateComponent} from './external/create.component';
import {DetailsComponent} from'./external/details.component';
import {TransactionComponent} from './transaction/transaction.component';
import {Createcomponent} from './transaction/create.component';
import {searchTransactionsPipe} from './transaction/search.transaction.pipe'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'accounts',
    component: AccountComponent,
    children: [
      { path: 'list', component: ListComponent },
      { path: 'create', component: CreateComponent },
      { path: ':id', component: DetailsComponent }
    ]
  },
  {
    path: 'transactions',
    component: TransactionComponent,
    children: [
      { path: 'create', component: Createcomponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
]


@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [AppComponent,searchTransactionsPipe, AccountsList, DetailsComponent,Createcomponent,TransactionComponent, AccountComponent, HomeComponent, PageNotFoundComponent, AccountForm, ListComponent, CreateComponent],
  bootstrap: [AppComponent],
  providers: [LoggerService, AccountsService]
})
export class AppModule { }
