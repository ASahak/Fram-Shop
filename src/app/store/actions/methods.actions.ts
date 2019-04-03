import { Action } from '@ngrx/store';

export enum MethodsActionTypes {
  __FlashMessage = '[Methods] FlashMessage Methods',
  __allUsersProduct = '[Methods] Get All Products',
  __getOneProduct = '[Methods] Get One Product',
  __getOneProductSuccess = '[Methods] Get One Product Successfully',
  __productSuccesfull = '[Methods] Product get Succesfuly',
  __productAppreciated = '[Methods] Product apreciated',
  __productAddToCart = '[Methods] Product add to cart',
  __actionSuccess = '[Methods] Action Succesfull',
  __deleteItemInCart = '[Methods] Delete Item In Cart',
  __getAllCartItems = '[Methods] Get All Cart Items',
  __getAllCartItemsSuccess = '[Methods] Get All Cart Items Success',
  __plusCartItem = '[Methods] Plus Cart Item',
  __minusCartItem = '[Methods] Minus Cart Item',
  __cartItemCountSucess = '[Methods] Cart ItemCount Success'
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
// Cart Actions
export class DeleteItemInCart implements Action {
  readonly type = MethodsActionTypes.__deleteItemInCart;
  constructor(public payload:{}){}
}
export class GetAllCartItems implements Action {
  readonly type = MethodsActionTypes.__getAllCartItems;
  constructor(public payload:{}){}
}
export class GetAllCartItemsSuccess implements Action {
  readonly type = MethodsActionTypes.__getAllCartItemsSuccess;
  constructor(public payload:{}){}
}
export class PlusCartItem implements Action {
  readonly type = MethodsActionTypes.__plusCartItem;
  constructor(public payload:{}){}
}
export class MinusCartItem implements Action {
  readonly type = MethodsActionTypes.__minusCartItem;
  constructor(public payload:{}){}
}
export class CartItemCountSuccess implements Action {
  readonly type = MethodsActionTypes.__cartItemCountSucess;
  constructor(){}
}

export type All = 
  FlashMessage |
  AllUsersProduct |
  OneProduct | 
  OneProductSuccess | 
  ProductSuccesfull | 
  ProductApreciated | 
  ProductAddToCart | 
  ActionSuccess |
  DeleteItemInCart |
  GetAllCartItems |
  GetAllCartItemsSuccess |
  PlusCartItem | 
  MinusCartItem |
  CartItemCountSuccess;
