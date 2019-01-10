import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {Logout} from './actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'pujaThreading';
  showMenu = false;
  userLoggedIn = false;
  username = '';
  userInfo: Observable<{reducers: {}}>;

  constructor( private store: Store<{reducers: {}}>,
               private router: Router) {
    this.userInfo = store.pipe(select('reducers'));
    this.userState();

  }

  ngOnInit() {
    window.addEventListener('click', (e) => {
      const nonMenuClick = document.getElementById('service-items');
      if (e.target['id'] !== 'navbarDropdown') {
        nonMenuClick.style.display = 'none';
      } else {
        // nonMenuClick.style.display = 'block';
        this.displaySubMenu();
      }
    });
    console.log('route:', this.router);
  }

  displaySubMenu() {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      document.getElementById('service-items').style.display = 'block';
    } else {
      document.getElementById('service-items').style.display = 'none';
    }
  }

  userState () {
    if (localStorage.getItem('loggedIn') === 'true') {
        this.userLoggedIn = true;
        this.username = localStorage.getItem('username');
    } else {
      this.userInfo.subscribe(
        (data) => {
          this.userLoggedIn = data['loginReducer'].loggedIn;
          this.username = data['loginReducer'].username;
        }
      );
    }
  }

  logout() {
    localStorage.setItem('loggedIn', 'false');
    localStorage.setItem('username', '');
    this.store.dispatch(new Logout());
    this.username = '';
    this.router.navigate(['/home']);
  }
}
