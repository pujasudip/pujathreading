import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopComponent} from './shop.component';
import {CosmeticsComponent} from './cosmetics/cosmetics.component';
import {GiftCardsComponent} from './gift-cards/gift-cards.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  { path: '', component: ShopComponent, children: [
      { path: 'cosmetics', component: CosmeticsComponent },
      { path: 'giftcards', component: GiftCardsComponent }
    ]},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule { }
