import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CosmeticsComponent} from './cosmetics/cosmetics.component';
import {GiftCardsComponent} from './gift-cards/gift-cards.component';
import {ShopComponent} from './shop.component';
import {ShopRoutingModule} from './shop-routing.module';

@NgModule({
  declarations: [
    ShopComponent,
    CosmeticsComponent,
    GiftCardsComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
