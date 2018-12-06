import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfferedServicesComponent } from './offered-services/offered-services.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

import { StoreModule } from '@ngrx/store';
import {UserloginService} from './userlogin.service';
import {HttpClientModule } from '@angular/common/http';
import {shopReducer} from './reducers/shopReducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfferedServicesComponent,
    LoginComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({reducers: shopReducer})
  ],
  providers: [UserloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
