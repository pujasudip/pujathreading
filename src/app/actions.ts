import { Action } from '@ngrx/store';

export enum ActionTypes {
  ADD_MESSAGE = 'ADD_MESSAGE',
  DELETE_MESSAGE = 'DELETE_MESSAGE',
  GET_MESSAGES = 'GET_MESSAGES'
}

export class AddMessage implements Action {
  readonly type = ActionTypes.ADD_MESSAGE;

  constructor(readonly payload: {message: string}) {
  }
}

export class DelMessage implements Action {
  readonly type = ActionTypes.DELETE_MESSAGE;

  constructor(readonly payload: {id: number}) {

  }
}

export class GetMessage implements Action {
  readonly type = ActionTypes.GET_MESSAGES;
}
