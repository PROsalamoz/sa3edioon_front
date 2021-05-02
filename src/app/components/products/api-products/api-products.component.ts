import { Component, OnInit } from '@angular/core';
import { ApiIproduct } from 'src/app/interfaces/api-iproduct';
import { CartItem } from 'src/app/interfaces/cart-item';
import { ApiProductService } from 'src/app/services/api-product.service';
import { CartServiceService } from 'src/app/services/cart-service.service';
import {ActivatedRoute} from "@angular/router";
import {SubCategories} from "../../classes/sub-categories";
import { TestiHideService } from 'src/app/services/testi-hide.service';

@Component({
  selector: 'app-api-products',
  templateUrl: './api-products.component.html',
  styleUrls: ['./api-products.component.css']
})
export class ApiProductsComponent implements OnInit {
ApiProducts: ApiIproduct[];
FilteresProducts: ApiIproduct[];
SubCategorySelected: SubCategories;
ProductList=[];
subCatId: number;
isRated=true;
changeRating(){
  this.isRated=!this.isRated;
}
  constructor(private _apiPrdServ:ApiProductService, private cartService: CartServiceService,
              private _activedRoute:ActivatedRoute, public testi: TestiHideService) {
  }
  ngOnInit(): void {
    this.testi.hide();
    this.subCatId=this._activedRoute.snapshot.params["subCatId"];
    // get all product
   this.getAllProduct();

    this.getProductsBySubCatId();
    console.log(this.ApiProducts);

  }

  addToCart(theProduct: ApiIproduct) {

    console.log(`Adding to cart: ${theProduct.Title}, ${theProduct.price}`);

    const theCartItem = new CartItem(theProduct);

    this.cartService.addToCart(theCartItem);
  }

  // @ts-ignore
  // getAllProduct(): ApiIproduct[]{

  // }

  getAllProduct(): ApiIproduct[]{
    this._apiPrdServ.getAllProducts().subscribe((res)=>{
      console.log(res);
      this.ApiProducts = res;
      this.FilteresProducts = res;
    },(err)=>{
      console.log(err);
    });
  }
  // @ts-ignore
  getProductsBySubCatId(): SubCategories{
    this._apiPrdServ.getSubCatSelected(this.subCatId).subscribe(
      (result) => {
        this.SubCategorySelected = result;
        this.ProductList = result.products;
        this.filetrpProducts();
        console.log(this.filetrpProducts());
      },
      (err) => {
        console.log(err)
      }
    );
  }

    filetrpProducts(): ApiIproduct[]{
      this.FilteresProducts = this.ApiProducts;
      return this.FilteresProducts.filter((prd) => {
      // @ts-ignore
      for (let i = 0; i < this.ProductList.length ; i++){

        if (prd.id == this.ProductList[i]){
          return true;
        }
      }
    });
  }

}