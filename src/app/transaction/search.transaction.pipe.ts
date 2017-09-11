import {Pipe, PipeTransform} from '@angular/core';
import {Transaction} from './transaction.model';
@Pipe({
  name: "SearchTransactions",
  pure: true
})
export class searchTransactionsPipe implements PipeTransform {
  transform(trans: Array<Transaction>, searchQuery: string) {
    if (searchQuery == "") {
      return trans;
    }
    return trans.filter(t => t.tags.indexOf(searchQuery) > -1);
  }
}
