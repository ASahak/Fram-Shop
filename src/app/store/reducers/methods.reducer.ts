// import { Action } from '@ngrx/store';
import * as  Actions from '../actions/methods.actions'
export type ActionT = Actions.All;

export const initialState = {
  products:{},
};
const __ProductsSuccessFull = (state, payload) =>{
  [].slice.call(payload).forEach(response=>{
    state[response.id] = response.myProduct 
  })
  return state
}
const __actionSuccess = (state, payload) => {
  return payload
}

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
  console.log(state, initialState)
  switch (action.type) {
    case Actions.MethodsActionTypes.__FlashMessage:
      return __FlashMessage(action.payload);
    case Actions.MethodsActionTypes.__actionSuccess:
      return __actionSuccess({...state.products}, action.payload);
    case Actions.MethodsActionTypes.__productSuccesfull:
      return __ProductsSuccessFull(Object.assign({},state.products), action.payload);
    default:
      return 0;
  }
}
