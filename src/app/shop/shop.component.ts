import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { AddMessage, DelMessage, GetMessage } from '../actions';
import {rootReducer} from '../reducers/rootReducer';
import { shopReducer } from '../reducers/shopReducer';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit, OnDestroy {
  messages$: Observable<{shopReducer: {}}>;
  data: string[];
  observer;

  constructor(private store: Store<{reducers: {}}>) {
    this.messages$ = store.pipe(select('reducers'));
  }

  ngOnInit() {
    this.observer = this.messages$.subscribe(
      (data) => {
        this.data = data.shopReducer['messages'];
      }
    );
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
