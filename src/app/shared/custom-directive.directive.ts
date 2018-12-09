import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  @HostBinding('class.showHideMenu') showHideMenu = false;

  constructor() { }

  @HostListener('click') menuShowHide() {
    this.showHideMenu = !this.showHideMenu;
  }

}
