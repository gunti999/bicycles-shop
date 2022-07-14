import { Injectable } from '@angular/core';
import { AppDbProductsService } from '../database/app-db-products.service';

export interface Cart {
  orderId: number;
  userId: number;
  porductId: number;
}

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  cart: Cart[] = [];

  constructor(
    private prod: AppDbProductsService
  ) { }

  addOrder(order: Cart) {
    this.cart.push(order);
    console.log(this.cart);
  }

  // removeOrder(productId) {

  // }

  // getCart(userId) {

  // }
}
