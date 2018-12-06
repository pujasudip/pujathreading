import { Action } from '@ngrx/store';
import {HttpClient, HttpParams} from '@angular/common/http';

const LOGIN_URL = '/userAccounts.php';

export enum ActionTypes {
  ADD_MESSAGE = 'ADD_MESSAGE',
  DELETE_MESSAGE = 'DELETE_MESSAGE',
  GET_MESSAGES = 'GET_MESSAGES',
  USER_INFO = 'USER_INFO'
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

export class GetUserInfo implements Action {
  readonly type = ActionTypes.USER_INFO;

  username: string;
  password: string;

  constructor(readonly payload: { username: string, password: string}) {
      this.username = this.payload.username;
      this.password = this.payload.password;
      console.log('up:', this.username, this.password);
      // this.getUserInfo();
  }

  // getUserInfo() {
  //   const params = new HttpParams();
  //   params.append('username', this.username);
  //   params.append('password', this.password);
  //   this.httpClient.post(LOGIN_URL, params).subscribe(
  //     (resp) => {
  //       console.log('resp:', resp);
  //     }
  //   );
  // }
}


