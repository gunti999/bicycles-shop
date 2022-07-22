import { Injectable } from '@angular/core';
import { AppDbProductsService, Product } from '../database/app-db-products.service';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  products: Product[] = [];

  constructor(
    private prod: AppDbProductsService
  ) {
    this.products = this.getProducts();
  }

  addProducts(id: number) {
    this.prod.getProductById(id).subscribe((data) => {
      if (data != undefined) {
        this.products.push(data);
        this.setProducts();
      }
    });
  }

  removeProduct(index: number) {
        this.products.splice(index, 1);
        this.setProducts();
        console.log(this.products);
  }

  removeAllProducts() {
    this.products = [];
    localStorage.removeItem('cardProducts');
  }

  submit() {
    console.log(this.products);
  }

  setProducts() {
    localStorage.setItem('cardProducts', JSON.stringify(this.products));
  }

  getProducts() {
    let data = localStorage.getItem('cardProducts');
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
}
