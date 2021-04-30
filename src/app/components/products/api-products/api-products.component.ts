
import { Component, OnInit } from '@angular/core';
import { ApiIproduct } from 'src/app/interfaces/api-iproduct';
import { CartItem } from 'src/app/interfaces/cart-item';
import { ApiProductService } from 'src/app/services/api-product.service';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-api-products',
  templateUrl: './api-products.component.html',
  styleUrls: ['./api-products.component.css']
})
export class ApiProductsComponent implements OnInit {
ApiProducts:ApiIproduct[];

  constructor(private _apiPrdServ:ApiProductService, private cartService: CartServiceService) { }
  currentRate:number=3;
  ngOnInit(): void {
   this._apiPrdServ.getAllProducts().subscribe((res)=>{
    //  console.log(res);
    this.ApiProducts=res;
   },(err)=>{
     console.log(err);

   })
  }

  addToCart(theProduct: ApiIproduct) {

    console.log(`Adding to cart: ${theProduct.Title}, ${theProduct.price}`);

    const theCartItem = new CartItem(theProduct);

    this.cartService.addToCart(theCartItem);
  }

}
