import { Injectable } from '@angular/core';
import { AppDbProductsService, Product } from '../database/app-db-products.service';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  products: Product[] = [];

  constructor(
    private prod: AppDbProductsService
  ) { }

  addProducts(id: number) {
    this.prod.getProductById(id).subscribe((data) => {
      if (data != undefined) {
        this.products.push(data);
      }  
    }); 
  }

  removeProduct(id: number) {
    this.products.forEach((el, i) => {
      if (el.id == id) {
        this.products.splice(i, 1);
      }
    })
  }

  // addOrder() {
    
  // }

  // removeOrder(productId) {

  // }

  // getCart(userId) {

  // }
}
