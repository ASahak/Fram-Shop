import { Action } from '@ngrx/store';

export enum MethodsActionTypes {
  __FlashMessage = '[Methods] FlashMessage Methods'
}

export class FlashMessage implements Action {
  readonly type = MethodsActionTypes.__FlashMessage;
  constructor(public payload:{}){}
}


export type All = FlashMessage;
