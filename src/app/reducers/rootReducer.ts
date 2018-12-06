import { combineReducers } from '@ngrx/store';
import { shopReducer } from './shopReducer';
import { loginReducer } from './loginReducer';

export const rootReducer = combineReducers({
  shopReducer: shopReducer,
  loginReducer: loginReducer
});
