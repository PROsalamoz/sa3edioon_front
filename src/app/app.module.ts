import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/site-layout/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { PaymentComponent } from './components/payment/payment.component';
import { ApiProductsComponent } from './components/products/api-products/api-products.component';
import { ApiProductDetailsComponent } from './components/products/api-product-details/api-product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PaymentComponent,
    ApiProductsComponent,
    ApiProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
