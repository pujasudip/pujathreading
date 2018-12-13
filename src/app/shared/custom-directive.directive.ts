import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @HostBinding('class.show') showHideMenu = false;

  constructor() { }

  @HostListener('click') menuShowHide() {
    if (this.showHideMenu) {
      document.getElementById('service-items').classList.remove('show');
    } else {
      document.getElementById('service-items').classList.add('show');
    }
    this.showHideMenu = !this.showHideMenu;
  }

}
