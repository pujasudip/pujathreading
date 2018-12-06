import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {rootReducer} from '../reducers/rootReducer';
import { GetUserInfo } from '../actions';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  userLoginInfo: Observable<{}>;
  userLoggedIn = false;

  constructor(private store: Store<rootReducer>) {
    this.userLoginInfo = store.pipe(select(rootReducer));
  }

  ngOnInit() {
  }

  userLogin(username, password) {
    this.store.dispatch(new GetUserInfo({username: username, password: password}));
  }

}
