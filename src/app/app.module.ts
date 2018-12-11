import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfferedServicesComponent } from './offered-services/offered-services.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers/rootReducer';
import {UserloginService} from './shared/userlogin.service';
import {HttpClientModule } from '@angular/common/http';
import { CustomDirectiveDirective } from './shared/custom-directive.directive';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CosmeticsComponent } from './cosmetics/cosmetics.component';
import { GiftCardsComponent } from './gift-cards/gift-cards.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import {AuthGuardService} from './auth-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfferedServicesComponent,
    LoginComponent,
    ShopComponent,
    CustomDirectiveDirective,
    SignUpComponent,
    CosmeticsComponent,
    GiftCardsComponent,
    AccountSettingsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({reducers: rootReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [UserloginService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
