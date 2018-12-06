import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions';

export const initialState = {
  messages: []
};

export function shopReducer(state = initialState, action: Action) {
  if (typeof action === 'undefined') {
    return state;
  }
  switch (action.type) {
    case ActionTypes.ADD_MESSAGE:
      const msg = action['payload'].message;
      console.log('msg:', state);
      return {...state, messages: [...state.messages, msg]};
    case ActionTypes.DELETE_MESSAGE:
      const newMessages = state.messages.slice();
      newMessages.splice(action['payload'].id, 1);
      return {...state, messages: newMessages};
    case ActionTypes.GET_MESSAGES:
      return state;
    default:
      return state;
  }
}
