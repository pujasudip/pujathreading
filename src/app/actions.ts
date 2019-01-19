import { Action } from '@ngrx/store';

export enum ActionTypes {
  ADD_MESSAGE = 'ADD_MESSAGE',
  DELETE_MESSAGE = 'DELETE_MESSAGE',
  GET_MESSAGES = 'GET_MESSAGES',
  USER_INFO = 'USER_INFO',
  LOG_OUT = 'LOG_OUT'
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

export class UserInfo implements Action {
  readonly type = ActionTypes.USER_INFO;

  constructor (readonly payload: { userloggedIn: boolean, username: string}) {
  }
}

export class Logout implements Action {
  readonly type = ActionTypes.LOG_OUT;
}


