import {combineReducers, compose} from '@ngrx/store';
import { shopReducer } from './shopReducer';
import { loginReducer } from './loginReducer';

export const rootReducer = compose(combineReducers)({
  shopReducer: shopReducer,
  loginReducer: loginReducer
});
