import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OfferedServicesComponent } from './offered-services/offered-services.component';
import { LoginComponent } from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './reducers/rootReducer';
import {UserloginService} from './shared/userlogin.service';
import {HttpClientModule } from '@angular/common/http';
import { CustomDirectiveDirective } from './shared/custom-directive.directive';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import {AuthGuardService} from './auth-gaurd.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import {ShortenPipe} from './shared/shorten.pipe';
import {SignUpService} from './shared/sign-up.service';
import {PageNotFoundComponent} from './404_Page.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfferedServicesComponent,
    LoginComponent,
    CustomDirectiveDirective,
    SignUpComponent,
    AccountSettingsComponent,
    ShoppingCartComponent,
    ShortenPipe,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({reducers: rootReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [UserloginService, AuthGuardService, SignUpService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
