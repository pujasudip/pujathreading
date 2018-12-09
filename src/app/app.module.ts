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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OfferedServicesComponent,
    LoginComponent,
    ShopComponent,
    CustomDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({reducers: rootReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [UserloginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
