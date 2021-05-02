import { Component, OnInit } from '@angular/core';
import { HideHowComponentsService } from 'src/app/services/hide-how-components.service';
import { TestiHideService } from 'src/app/services/testi-hide.service';
import { CartItem } from '../../interfaces/cart-item';
import {CartServiceService} from '../../services/cart-service.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cartItems: CartItem[] = [];
  totalPrice = 0;
  totalQuantity = 0;

  constructor(private cartService: CartServiceService, public slider:HideHowComponentsService,
    public test: TestiHideService) { }

  ngOnInit(): void {
    this.test.hide();
    this.slider.hide();
    this.listCartDetails();
  }

  // tslint:disable-next-line:typedef
  listCartDetails() {

    // get a handle to the cart items
    this.cartItems = this.cartService.cartItems;

    // subscribe to the cart totalPrice
    this.cartService.totalPrice.subscribe(
      data => this.totalPrice = data
    );

    // subscribe to the cart totalQuantity
    this.cartService.totalQuantity.subscribe(
      data => this.totalQuantity = data
    );

    // compute cart total price and quantity
    this.cartService.computeCartTotals();
  }

  incrementQuantity(cartItem: CartItem){
    this.cartService.addToCart(cartItem)
  }

  decrementQuantity(theCartItem: CartItem) {
    this.cartService.decrementQuantity(theCartItem);
  }

  remove(theCartItem: CartItem) {
    this.cartService.remove(theCartItem);
  }

}
