import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {rootReducer} from '../reducers/rootReducer';
import { GetUserInfo } from '../actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  userLoginInfo: Observable<{}>;
  userLoggedIn = false;

  constructor(private store: Store<{loginInfo: {}}>) {
    this.userLoginInfo = store.pipe(select(rootReducer));
  }

  ngOnInit() {
  }

  userLogin(id) {
    this.store.dispatch(new GetUserInfo(id));
  }

}
