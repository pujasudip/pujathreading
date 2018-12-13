import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  animations: [
    trigger('iconHover', [
      state('normal', style({
        'color': 'black',
        'transform': 'scale(1)',
        'cursor': 'pointer'
      })),
      state('highlight', style({
        'color': 'blue',
        'transform': 'scale(1.3)',
        'cursor': 'pointer'
      })),
      transition('normal <=> highlight', animate(100))
    ])
  ]
})
export class HomeComponent implements OnInit {
  iconStateFB = 'normal';
  iconStateTW = 'normal';
  iconStateIN = 'normal';
  testText = 'this is a test';

  constructor() { }

  ngOnInit() {
  }

  animateIcons(icon) {
    switch (icon) {
      case 'FB':
        this.iconStateFB === 'highlight' ? this.iconStateFB = 'normal' : this.iconStateFB = 'highlight';
        break;
      case 'TW':
        this.iconStateTW === 'highlight' ? this.iconStateTW = 'normal' : this.iconStateTW = 'highlight';
        return;
      case 'IN':
        this.iconStateIN === 'highlight' ? this.iconStateIN = 'normal' : this.iconStateIN = 'highlight';
        return;
      default:
        return;
    }
  }

}
