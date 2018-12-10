import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {rootReducer} from '../reducers/rootReducer';
import { UserInfo } from '../actions';
import { HttpClient } from '@angular/common/http';
import {UserloginService} from '../shared/userlogin.service';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  userLoginInfo: Observable<{loginReducer: {}}>;
  userLoggedIn = false;
  loginError = false;
  username = '';
  name = '';

  constructor(private store: Store<{reducers: {}}>,
              private userloginService: UserloginService,
              private route: Router,
              private location: Location) {
    this.userLoginInfo = store.pipe(select('reducers'));
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const formValues = form.value;
    this.userloginService.userLogin(formValues.username, formValues.password).subscribe(
    (data) => {
      if (data.success) {
        this.userLoggedIn = true;
        this.username = data['username'];
        this.store.dispatch(new UserInfo({userloggedIn: true, username: this.username}));
        this.route.navigate(['/home']);
      } else {
        this.loginError = true;
      }
    }
    );
  }

  cancelLogin() {
    console.log('location: ', this.location);
    this.location.back();
  }
}
