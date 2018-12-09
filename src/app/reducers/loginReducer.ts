import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions';

export const initialState = {
    loggedIn: false,
    username: ''
};

export function loginReducer(state = initialState, action: Action) {
  switch (action.type) {
    case ActionTypes.USER_INFO:
      return { ...state, loggedIn: action['payload'].userloggedIn, username: action['payload'].username};
    case ActionTypes.LOG_OUT:
      return { ...state, loggedIn: false};
    default:
      return state;
  }

}
