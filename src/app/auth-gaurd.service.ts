import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Injectable, OnInit} from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {
  isLoggedIn = false;
  authUser: Observable<{reducers: {}}>;

  constructor(private store: Store<{reducers: {}}>, private rotuer: Router) {
    this.authUser = this.store.pipe(select('reducers'));
    this.userInfo();
  }

  userInfo() {
    this.authUser.subscribe(
      (data) => {
        this.isLoggedIn =  data['loginReducer'].loggedIn;
      }
    );
  }

  canActivate(actRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('loggedIn') === 'true') {
      return true;
    } else if (this.isLoggedIn) {
      return true;
    } else {
      this.rotuer.navigate(['/home']);
      return false;
    }
  }
}
