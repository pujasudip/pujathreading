import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import { AddMessage, DelMessage, GetMessage } from '../actions';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.sass']
})
export class ShopComponent implements OnInit, OnDestroy {
  messages$: Observable<{}>;
  data: string[];
  observer;

  constructor(private store: Store<{messages: {}}>) {
    this.messages$ = store.pipe(select('messages'));
  }

  ngOnInit() {
    this.observer = this.messages$.subscribe(
      (data) => {
        this.data = data['messages'];
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
    console.log('ob:', this.observer);
    this.observer.unsubscribe();
  }

}
