// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, Subscriber, pipe } from 'rxjs';
import { catchError, map, mergeMap, mapTo, tap, switchMap, filter } from 'rxjs/operators';
import { All, MethodsActionTypes } from '../actions/methods.actions'
import { ShopService } from '../../services/shop.service'
import { AuthServiceService } from '../../services/auth-service.service'
@Injectable()
export class MethodsEffects {
  @Effect()
  __getAllProducts$: Observable<Action> = this.actions$.pipe(
    ofType<All>(MethodsActionTypes.__allUsersProduct),
    mergeMap(action =>
      this._shop.__getAllUsers()
      .pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: '[Methods] Product get Succesfuly', payload: data })),
        // If request fails, dispatch failed action
        // catchError(() => of({ type: '[Methods] Get All Products Field' }))
      )
    )
  );

  @Effect()
  __productApreciated$: Observable<any> = this.actions$.pipe(
    ofType<All>(MethodsActionTypes.__productAppreciated),
    mergeMap(action => this._shop.__updateRaiting(action['payload']) /* succesFull any functions whichs finishet ok */),
    map(data => ({ type: '[Methods] Action Succesfull'}))
  )
  @Effect()
  __deleteItemInCart$: Observable<any> = this.actions$.pipe(
    ofType<All>(MethodsActionTypes.__deleteItemInCart),
    mergeMap(action => this._shop.__deleteProductInCart(action['payload'])/* succesFull any functions whichs finishet ok */),
    map(data => ({ type: '[Methods] Get All Cart Items Success', payload:data}))
  )
  @Effect()
  __productAddToCart$: Observable<any> = this.actions$.pipe(
    ofType<All>(MethodsActionTypes.__productAddToCart),
    mergeMap(action => this._shop.__addProductToCart(action['payload'])),
    map(data => ({ type: '[Methods] Action Succesfull'}))
  )
  @Effect()
  __plusCartItem$: Observable<any> = this.actions$.pipe(
    ofType<All>(MethodsActionTypes.__plusCartItem),
    mergeMap(action => this._shop.__plusORminusCartItemRecet(action['payload'])),
    map(data => ({ type: '[Methods] Cart ItemCount Success'}))
  )
  @Effect()
  __minusCartItem$: Observable<any> = this.actions$.pipe(
    ofType<All>(MethodsActionTypes.__minusCartItem),
    mergeMap(action => this._shop.__plusORminusCartItemRecet(action['payload'])),
    map(data => ({ type: '[Methods] Cart ItemCount Success'}))
  )
  


  constructor(
      private _authServ:AuthServiceService,
      private _shop: ShopService, 
      private actions$: Actions) {}
}