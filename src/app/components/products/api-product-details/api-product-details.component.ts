import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ApiIproduct } from 'src/app/interfaces/api-iproduct';
import { ApiProductService } from 'src/app/services/api-product.service';
import { CartItem } from 'src/app/interfaces/cart-item';
import { CartServiceService } from 'src/app/services/cart-service.service';
import {Location} from "@angular/common";
import { HideAndDispalyService } from 'src/app/services/hide-and-dispaly.service';

@Component({
  selector: 'app-api-product-details',
  templateUrl: './api-product-details.component.html',
  styleUrls: ['./api-product-details.component.css']
})
export class ApiProductDetailsComponent implements OnInit {
  productDetails:ApiIproduct;
  constructor(private _apiPrdServ:ApiProductService,private _activedRoute:ActivatedRoute, private cartService: CartServiceService,private location: Location,public carousel:HideAndDispalyService) { }

  ngOnInit(): void {
    this.carousel.hide();
    let id=this._activedRoute.snapshot.params["id"];
    this._apiPrdServ.viewProduct(id).subscribe((res)=>{
      this.productDetails=res;
      console.log(this.productDetails);
    })


  }
  addToCart() {
    // console.log(`Adding to cart: ${this.prd.Title}, ${this.prd.price}`);
    const theCartItem = new CartItem(this.productDetails);
    this.cartService.addToCart(theCartItem);
  }
  back(){
    this.location.back();
  }
}
