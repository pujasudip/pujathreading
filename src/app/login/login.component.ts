import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {rootReducer} from '../reducers/rootReducer';
import { GetUserInfo } from '../actions';
import { HttpClient } from '@angular/common/http';
import {UserloginService} from '../userlogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  userLoginInfo: Observable<{loginReducer: {}}>;
  userLoggedIn = false;

  constructor(private store: Store<{reducers: {}}>, private userlogin: UserloginService) {
    this.userLoginInfo = store.pipe(select('reducers'));
  }

  ngOnInit() {
  }

  userLogin(username, password) {
    // this.store.dispatch(new GetUserInfo({username: username, password: password}));
    this.userlogin.userLogin(username, password);
  }

}
