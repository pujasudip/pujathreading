import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {rootReducer} from '../reducers/rootReducer';
import { GetUserInfo } from '../actions';
import { HttpClient } from '@angular/common/http';
import {UserloginService} from '../userlogin.service';
import {loginReducer} from '../reducers/loginReducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  userLoginInfo: Observable<{}>;
  userLoggedIn = false;

  constructor(private store: Store<rootReducer>, private userlogin: UserloginService) {
    this.userLoginInfo = store.pipe(select(loginReducer));
  }

  ngOnInit() {
  }

  userLogin(username, password) {
    // this.store.dispatch(new GetUserInfo({username: username, password: password}));
    this.userlogin.userLogin(username, password);
  }

}
