import * as Actions from '../actions/todo.actions';
// import { Action } from 'rxjs/internal/scheduler/Action';
// import { Action } from '@ngrx/store';

export type Action = Actions.All; 

export interface Todo {
  name:string;
  age:number;
  birthday:string;
}

export const initialState: Todo = {
  name:"Arthur",
  age:22,
  birthday:'12.04.1996'
};
const changeUsers = (state, newUser)=>{
  return Object.assign({}, state, newUser);
}

export function userReducer(state: Todo = initialState, action: Action) {
  switch (action.type) {
    case Actions.TodoActionUser.Name:
      return changeUsers(state, {name:action.payload});
    case Actions.TodoActionUser.Age:
      return changeUsers(state, {age:action.payload});
    case Actions.TodoActionUser.Birthday:
      return changeUsers(state, {birthday:action.payload});
    default:
      return state;
  }
}
