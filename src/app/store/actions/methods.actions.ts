import { Action } from '@ngrx/store';

export enum MethodsActionTypes {
  __FlashMessage = '[Methods] FlashMessage Methods',
  __allUsersProduct = '[Methods] Get All Products',
  __getOneProduct = '[Methods] Get One Product',
  __getOneProductSuccess = '[Methods] Get One Product Successfully',
  __productSuccesfull = '[Methods] Product get Succesfuly',
  __productAppreciated = '[Methods] Product apreciated',
  __productAddToCart = '[Methods] Product add to cart',
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
export class OneProduct implements Action {
  readonly type = MethodsActionTypes.__getOneProduct;
  constructor(public payload:{}){}
}
export class OneProductSuccess implements Action {
  readonly type = MethodsActionTypes.__getOneProductSuccess;
  constructor(public payload:{}){}
}
export class ProductSuccesfull implements Action {
  readonly type = MethodsActionTypes.__productSuccesfull;
  constructor(public payload:{}){}
}
export class ProductApreciated implements Action {
  readonly type = MethodsActionTypes.__productAppreciated;
  constructor(public payload:{}){}
}
export class ProductAddToCart implements Action {
  readonly type = MethodsActionTypes.__productAddToCart;
  constructor(public payload:{}){}
}
export class ActionSuccess implements Action {
  readonly type = MethodsActionTypes.__actionSuccess;
  constructor(){}
}

export type All = FlashMessage | AllUsersProduct | OneProduct | OneProductSuccess | ProductSuccesfull | ProductApreciated | ProductAddToCart | ActionSuccess;
