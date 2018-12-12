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
  iconState = 'normal';

  constructor() { }

  ngOnInit() {
  }

  animateIcons() {
    this.iconState === 'highlight' ? this.iconState = 'normal' : this.iconState = 'highlight';
  }

}
