import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'pujaThreading';
  showMenu = false;

  displaySubMenu() {
    this.showMenu = !this.showMenu;
    if (this.showMenu) {
      document.getElementById('service-items').style.display = 'block';
    } else {
      document.getElementById('service-items').style.display = 'none';
    }
  }
}
