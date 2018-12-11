import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OfferedServicesComponent} from './offered-services/offered-services.component';
import {LoginComponent} from './login/login.component';
import {ShopComponent} from './shop/shop.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {CosmeticsComponent} from './cosmetics/cosmetics.component';
import {GiftCardsComponent} from './gift-cards/gift-cards.component';
import {AccountSettingsComponent} from './account-settings/account-settings.component';
import {AuthGuardService} from './auth-gaurd.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent, children: [
      { path: 'cosmetics', component: CosmeticsComponent },
      { path: 'giftcards', component: GiftCardsComponent }
    ]},
  { path: 'services', component: OfferedServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'account', canActivate: [AuthGuardService], component: AccountSettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
