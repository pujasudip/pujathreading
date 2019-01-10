import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { AddMessage, DelMessage, GetMessage } from '../actions';
import {rootReducer} from '../reducers/rootReducer';
import { shopReducer } from '../reducers/shopReducer';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass'],
  animations: [
    trigger('slideComp', [
      state('normal', style({
        'opacity': '0',
        'transform': 'translateX(100%)',
        'color': 'red'
      })),
      state('in', style({
        'opacity': '1',
        'transform': 'translateX(0)',
        'color': 'blue'
      })),
      transition('normal => in', animate(100))
    ])
  ]
})

export class ShopComponent implements OnInit, OnDestroy {
  initialAnimation = 'normal';

  messages$: Observable<{shopReducer: {}}>;
  data: string[];
  observer;

  constructor(private store: Store<{reducers: {}}>) {
    this.messages$ = store.pipe(select('reducers'));
  }

  ngOnInit() {
    this.observer = this.messages$.subscribe(
      (data) => {
        console.log('data:', data);
        this.data = data.shopReducer['messages'];
      }
    );
  }

  animateRouter() {
    this.initialAnimation === 'normal' ? this.initialAnimation = 'in' : this.initialAnimation = 'normal';
    console.log('animation triggered');
  }

  addMessage(msg) {
    this.store.dispatch(new AddMessage({message: msg}));
  }

  delMessage(index) {
    this.store.dispatch(new DelMessage({id: index}));
  }

  getMessages() {
    this.store.dispatch(new GetMessage());
  }

  ngOnDestroy() {
    this.observer.unsubscribe();
  }

}
