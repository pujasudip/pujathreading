import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  shoppingList = [
    {id: 1, name: 'Lipstick', qty: 2, price: 45, amount: 90},
    {id: 2, name: 'Hair Color', qty: 1, price: 10, amount: 10},
    {id: 3, name: 'Eyebrow Pencil', qty: 5, price: 15, amount: 45},
    {id: 4, name: 'Foundation', qty: 1, price: 25, amount: 25},
    {id: 5, name: 'Nail Polish', qty: 3, price: 50, amount: 150}
  ];

  constructor() { }

  ngOnInit() {
  }

}
