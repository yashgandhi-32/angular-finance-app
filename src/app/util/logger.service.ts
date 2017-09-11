import {Injectable} from '@angular/core';

@Injectable()
export class LoggerService{
  public logg(msg:string){
    console.log(msg);
  }
}
