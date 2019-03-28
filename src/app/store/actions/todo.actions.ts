import { Action } from '@ngrx/store';
export enum TodoActionUser {
  Name = '[Name] Load Name',
  Age = '[Age] Load Age',
  Birthday = '[Name] Load Birthday',
}

export class NAME implements Action {
  readonly type = TodoActionUser.Name;
  constructor(public payload:string){}
}
export class AGE implements Action {
  readonly type = TodoActionUser.Age;
  constructor(public payload:number){}
}
export class BIRTHDAY implements Action {
  readonly type = TodoActionUser.Birthday;
  constructor(public payload:string){}
}


export type All = NAME | AGE | BIRTHDAY;
