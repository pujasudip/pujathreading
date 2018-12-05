import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions';

export const initialState = {
  userInfo: {}
};

export function loginReducer(state = initialState, action: Action) {
  return state;
}
