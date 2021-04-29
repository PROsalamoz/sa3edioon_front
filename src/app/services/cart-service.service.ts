import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {CartItem} from '../interfaces/cart-item';
import {NavComponent} from './../components/site-layout/nav/nav.component'
import {LoginStatusComponent} from './../components/Authentication/login-status/login-status.component'

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
DisplayBanner:false;
  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new Subject<number>();
  totalQuantity: Subject<number> = new Subject<number>();

  constructor() { }

  // tslint:disable-next-line:typedef
  addToCart(theCartItem: CartItem) {

    // check if we already have the item in our cart
    let alreadyExistsInCart = false;
    let existingCartItem: CartItem;

    if (this.cartItems.length > 0) {
      // find the item in the cart based on item id
      existingCartItem = this.cartItems.find(tempCartItem => tempCartItem.id === theCartItem.id);
      // check if we found it
      // tslint:disable-next-line:triple-equals
      alreadyExistsInCart = (existingCartItem != undefined);
    }

    if (alreadyExistsInCart) {
      // increment the quantity
      existingCartItem.quantity++;
    }
    else {
      // just add the item to the array
      this.cartItems.push(theCartItem);
    }

    // compute cart total price and total quantity
    this.computeCartTotals();
  }

  // tslint:disable-next-line:typedef
  computeCartTotals() {

    let totalPriceValue = 0;
    let totalQuantityValue = 0;

    for (const currentCartItem of this.cartItems) {
      totalPriceValue += currentCartItem.quantity * currentCartItem.unitPrice;
      totalQuantityValue += currentCartItem.quantity;
    }

    // publish the new values ... all subscribers will receive the new data
    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    // log cart data just for debugging purposes
    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  //increment decrement and remove cart items

  decrementQuantity(theCartItem: CartItem) {

    theCartItem.quantity--;

    if (theCartItem.quantity === 0) {
      this.remove(theCartItem);
    }
    else {
      this.computeCartTotals();
    }
  }

  remove(theCartItem: CartItem) {

    // get index of item in the array
    const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id === theCartItem.id );

    // if found, remove the item from the array at the given index
    if (itemIndex > -1) {
      this.cartItems.splice(itemIndex, 1);

      this.computeCartTotals();
    }
  }

  // tslint:disable-next-line:typedef
  logCartData(totalPriceValue: number, totalQuantityValue: number) {

    console.log('Contents of the cart');
    for (const tempCartItem of this.cartItems) {
      const subTotalPrice = tempCartItem.quantity * tempCartItem.unitPrice;
      console.log(`name: ${tempCartItem.name}, quantity=${tempCartItem.quantity}, unitPrice=${tempCartItem.unitPrice}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalQuantityValue}`);
    console.log('----');
  }

}
