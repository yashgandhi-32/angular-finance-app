import {Component,OnInit,OnDestroy} from  '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  templateUrl:'./create.component.html'
})
export class Createcomponent implements OnInit,OnDestroy{
  private _accountId:number;
  private _params:any;

  constructor(private _route:ActivatedRoute){}

  public ngOnInit(){
    this._params = this._route.params.subscribe(params => {
      this._accountId = +params['account'];
    });
  }
  public ngOnDestroy(){
   this._params.unsubscribe();
  }
}
