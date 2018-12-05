import { Action, combineReducers } from '@ngrx/store';
import { shopReducer } from './shopReducer';

export const rootReducer = combineReducers({
  shopReducer: shopReducer
});
