export class Account{
  public id:number

  public title:string

  public name:string

  public description:string

  public balance:number

  public constructor(id:number,title:string,description:string,balance:number,name:string){
    this.id =  id;
    this.title = title;
    this.description = description;
    this.balance = balance;
    this.name=name;
  }

}
