// import { Action } from '@ngrx/store';
import * as  Actions from '../actions/methods.actions'
export type ActionT = Actions.All;

export const initialState = {
  products:null,
  cartItems:null,
  showBadges: null,
  allProducts: null
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
    __FlashMessage(action.payload)
      return {...state};
    case Actions.MethodsActionTypes.__actionSuccess:
      return {...state}
    case Actions.MethodsActionTypes.__productSuccesfull:
      return {...state, products:action.payload}
    case Actions.MethodsActionTypes.__getAllCartItems:
      return {...state, cartItems:action.payload}
    case Actions.MethodsActionTypes.__getAllCartItemsSuccess:
      return {...state, cartItems:action.payload}
    case Actions.MethodsActionTypes.__cartItemCountSucess:
      return {...state}
    case Actions.MethodsActionTypes.__clearCart:
      return {...state, cartItems:action.payload}
    case Actions.MethodsActionTypes.__countBadgeProducts:
      return {...state, showBadges:action.payload}
    default:
      return state;
  }
  // console.log(state, 'sssss')
}

