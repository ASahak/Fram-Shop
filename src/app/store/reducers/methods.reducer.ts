import { Action, createSelector, createFeatureSelector } from '@ngrx/store'
import * as  Actions from '../actions/methods.actions'
import { AppState } from '../../store/app.state'
export type ActionT = Actions.All;

export  interface initialStateInterface {
  products:Object,
  cartItems:Object,
  showBadges: Object,
  allProducts: [],
  isLoggined: Boolean,
  shopContentMinAndMax: {
    min: Object,
    max: Object
  },
  sortBy: Object
};
export const initialState = {
  products:null,
  cartItems:null,
  showBadges: null,
  allProducts: null,
  isLoggined: false,
  shopContentMinAndMax: {
    min: null,
    max: null
  },
  sortBy: null
};

const __FlashMessage = (payload) => {
  if(document.querySelector('.falshMessage')){
    document.querySelector('.falshMessage').remove()
  }
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
    case Actions.MethodsActionTypes.__Login:
      return {...state, isLoggined:action.payload}
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
    case Actions.MethodsActionTypes.__minAndMaxFilter:
      return {...state, shopContentMinAndMax:action.payload}
    case Actions.MethodsActionTypes.__sortBy:
      return {...state, sortBy:action.payload}
    case Actions.MethodsActionTypes.__productSuccessFullRemoved:
    __FlashMessage({message:"Your product was deleted successfull", timeout:4000, classType:'successFlash'})
      return {...state}
    default:
      return state;
  }
  
}
const getMethods                           = createFeatureSelector<initialStateInterface>('_methods');
export const getMethodProducts             = createSelector(getMethods, state => state.products);
export const getMethodAllProducts          = createSelector(getMethods, state => state.allProducts);
export const getMethodSortBy               = createSelector(getMethods, state => state.sortBy);
export const getMethodShopContentMinAndMax = createSelector(getMethods, state => state.shopContentMinAndMax);
export const getMethodShowBadges           = createSelector(getMethods, state => state.showBadges);

