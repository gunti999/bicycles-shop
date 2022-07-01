import { Injectable } from '@angular/core';
import { AppDbProductsService } from './app-db-products.service';

export interface Cart {
  id: number;
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

  // addOrder(id: number) {
    
  // }

  // removeOrder(productId) {

  // }

  // getCart(userId) {

  // }
}
