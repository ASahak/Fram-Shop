// import { Action } from '@ngrx/store';
import * as  Actions from '../actions/methods.actions'

export type ActionT = Actions.All;
export interface State {

}

export const initialState: State = {

};
const __FlashMessage = (payload) => {
  var _body = document.querySelector('body'),
      _div = document.createElement("div"),
      _closeX = document.createElement("a"),
      _ptext = document.createElement("p");
  _closeX.innerHTML = "X";
  _ptext.innerHTML = payload.message;
  _div.classList.add(...['falshMessage', payload.classType]);
  _div.append(_ptext, _closeX);
  setTimeout(() => {
      _div.style.top = "10px"
  }, 100);
  _body.appendChild(_div);
  _closeX.onclick = (e: Event) => {
      _div.remove()
  }
  setTimeout(() => {
      _div.remove()
  }, payload.timeout);
}

export function methodReducer(state = initialState, action: ActionT) {
  switch (action.type) {
    case Actions.MethodsActionTypes.__FlashMessage:
      return __FlashMessage(action.payload);
    default:
      return 0;
  }
}
