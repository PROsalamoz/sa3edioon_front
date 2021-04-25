import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/site-layout/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './components/payment/payment.component';
import { ApiProductsComponent } from './components/products/api-products/api-products.component';
import { ApiProductDetailsComponent } from './components/products/api-product-details/api-product-details.component';
import { ContentComponent } from './components/content/content.component';
import { MainComponent } from './components/content/main/main.component';
import { LoginComponent } from './components/Authentication/login/login.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { LoginStatusComponent } from './components/Authentication/login-status/login-status.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditshopComponent } from './components/shops/add-editshop/add-editshop.component';
import { ShowshopComponent } from './components/shops/showshop/showshop.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PaymentComponent,
    ApiProductsComponent,
    ApiProductDetailsComponent,
    ContentComponent,
    MainComponent,
    LoginComponent,
    RegisterComponent,
    LoginStatusComponent,
    AddEditshopComponent,
    ShowshopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
