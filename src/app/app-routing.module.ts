import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {OfferedServicesComponent} from './offered-services/offered-services.component';
import {LoginComponent} from './login/login.component';
import {ShopComponent} from './shop/shop.component';
import {SignUpComponent} from './sign-up/sign-up.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent},
  { path: 'services', component: OfferedServicesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
