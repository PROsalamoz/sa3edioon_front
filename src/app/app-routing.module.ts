import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/Authentication/login/login.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { ContentComponent } from './components/content/content.component';
import { ApiProductDetailsComponent } from './components/products/api-product-details/api-product-details.component';
import { ApiProductsComponent } from './components/products/api-products/api-products.component';
import {SubcategoryComponent} from "./components/subcategory/subcategory/subcategory.component";

const routes: Routes = [
  { path: 'home', component: ContentComponent },
  {path:'ApiProducts',component:ApiProductsComponent},
  {path:'ApiProduct/:id',component:ApiProductDetailsComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'sub_category', component: SubcategoryComponent},
  { path: 'login', component: LoginComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
