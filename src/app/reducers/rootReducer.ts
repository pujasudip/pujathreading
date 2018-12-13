import {combineReducers, compose} from '@ngrx/store';
import { shopReducer } from './shopReducer';
import { loginReducer } from './loginReducer';

export function rootReducer () {
  return compose(combineReducers)({
    shopReducer: shopReducer,
    loginReducer: loginReducer
  });
}
