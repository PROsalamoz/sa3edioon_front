import {ApiIproduct} from './api-iproduct';

export class CartItem {

  id: string;
  name: string;
  imageUrl: string;
  unitPrice: number;
  quantity: number;

  constructor(product: ApiIproduct) {
  this.id = product.ProductId.toString();
  this.name = product.Title;
  this.imageUrl = product.img;
  this.unitPrice = product.price;
  this.quantity = 1;
  }
}
