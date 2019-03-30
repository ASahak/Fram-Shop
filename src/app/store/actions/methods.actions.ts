import { Action } from '@ngrx/store';

export enum MethodsActionTypes {
  __FlashMessage = '[Methods] FlashMessage Methods',
  __allUsersProduct = '[Methods] Get All Products',
  __productSuccesfull = '[Methods] Product get Succesfuly',
  __productAppreciated = '[Methods] Product apreciated',
  __actionSuccess = '[Methods] Action Succesfull'
}

export class FlashMessage implements Action {
  readonly type = MethodsActionTypes.__FlashMessage;
  constructor(public payload:{}){}
}
export class AllUsersProduct implements Action {
  readonly type = MethodsActionTypes.__allUsersProduct;
  constructor(){}
}
export class ProductSuccesfull implements Action {
  readonly type = MethodsActionTypes.__productSuccesfull;
  constructor(public payload:{}){}
}
export class ProductApreciated implements Action {
  readonly type = MethodsActionTypes.__productAppreciated;
  constructor(public payload:{}){}
}
export class ActionSuccess implements Action {
  readonly type = MethodsActionTypes.__actionSuccess;
  constructor(public payload:{}){}
}

export type All = FlashMessage | AllUsersProduct | ProductSuccesfull | ProductApreciated | ActionSuccess;
