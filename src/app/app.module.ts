import { CartStatusComponent } from './components/cart-status/cart-status.component';
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
import { AddEditcategoryComponent } from './components/category/add-editcategory/add-editcategory.component';
import { ShowcategoryComponent } from './components/category/showcategory/showcategory.component';
import { ShopsComponent } from './components/shops/shops/shops.component';
import { CategoryComponent } from './components/category/category/category.component';
import { SubcategoryComponent } from './components/subcategory/subcategory/subcategory.component';
import { AddEditsubcategoryComponent } from './components/subcategory/add-editsubcategory/add-editsubcategory.component';
import { ShowsubcategoryComponent } from './components/subcategory/showsubcategory/showsubcategory.component';
import { AddEditdeliverypersonComponent } from './components/deliveryperson/add-editdeliveryperson/add-editdeliveryperson.component';
import { ShowdeliverypersonComponent } from './components/deliveryperson/showdeliveryperson/showdeliveryperson.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { BrandComponent } from './components/brand/brand.component';
import { DeleteProductComponent } from './components/products/delete-product/delete-product.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { SearchForProductComponent } from './components/search-for-product/search-for-product.component';

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
    AddEditcategoryComponent,
    ShowcategoryComponent,
    ShopsComponent,
    CategoryComponent,
    SubcategoryComponent,
    CartStatusComponent,
    CartDetailsComponent,
    AddEditsubcategoryComponent,
    ShowsubcategoryComponent,
    AddEditdeliverypersonComponent,
    ShowdeliverypersonComponent,
    AddProductComponent,
    TestimonialComponent,
    BrandComponent,
    UpdateProductComponent,
    DeleteProductComponent,
    SearchForProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // AngularFontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
