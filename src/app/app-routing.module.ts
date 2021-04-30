import { CategoryComponent } from './components/category/category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/Authentication/login/login.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { ContentComponent } from './components/content/content.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ApiProductDetailsComponent } from './components/products/api-product-details/api-product-details.component';
import { ApiProductsComponent } from './components/products/api-products/api-products.component';
import {SubcategoryComponent} from "./components/subcategory/subcategory/subcategory.component";
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { DeleteProductComponent } from './components/products/delete-product/delete-product.component';
import { ShopsComponent } from './components/shops/shops/shops.component';

const routes: Routes = [
  { path: 'home', component: ContentComponent },
  {path: 'category',component:CategoryComponent},
  {path:'ApiProducts',component:ApiProductsComponent},
  {path:'ApiProduct/:id',component:ApiProductDetailsComponent},
  {path:'update-product/:id',component:UpdateProductComponent},
  { path: 'delete-product/:id', component: DeleteProductComponent},
  {path:'add-product',component:AddProductComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'sub_category', component: SubcategoryComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  { path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'shops', component: ShopsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
