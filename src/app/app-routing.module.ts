import { CategoryComponent } from './components/category/category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/Authentication/login/login.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { ContentComponent } from './components/content/content.component';
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { ApiProductDetailsComponent } from './components/products/api-product-details/api-product-details.component';
import { ApiProductsComponent } from './components/products/api-products/api-products.component';

const routes: Routes = [
  { path: 'home', component: ContentComponent },
  {path: 'category',component:CategoryComponent},
  {path:'ApiProducts',component:ApiProductsComponent},
  {path:'ApiProduct/:id',component:ApiProductDetailsComponent},
  {path:'add-product',component:AddProductComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
