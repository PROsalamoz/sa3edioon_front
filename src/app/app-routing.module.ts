import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiProductDetailsComponent } from './components/products/api-product-details/api-product-details.component';
import { ApiProductsComponent } from './components/products/api-products/api-products.component';

const routes: Routes = [
  {path:'ApiProducts',component:ApiProductsComponent},
 {path:'ApiProduct/:id',component:ApiProductDetailsComponent},
  {path:'',redirectTo:'/Home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
