// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of, Subscriber } from 'rxjs';
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
    mergeMap(action => this._shop.__updateRaiting(action['payload'])),
    map(data => ({ type: '[Methods] Action Succesfull'}))
  )
  


  constructor(
      private _authServ:AuthServiceService,
      private _shop: ShopService, 
      private actions$: Actions) {}
}