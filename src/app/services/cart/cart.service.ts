import { Injectable } from '@angular/core';
import { AppDbProductsService, Product } from '../database/app-db-products.service';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  products: Product[] = [];
  prodForOrderId: number = 1;


  constructor(
    private prod: AppDbProductsService
  ) {
    this.products = this.getProducts();
    this.prodForOrderId = this.getProdForOrderId();
  }

  addProducts(id: number) {
    this.prod.getProductById(id).subscribe((data) => {
      if (data != undefined) {
        data.id = this.prodForOrderId;
        this.products.push(data);
        this.setProducts();
        this.prodForOrderId++;
        localStorage.setItem('prodForOrderId', '' + this.prodForOrderId);
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

  removeAllProducts() {
    this.products = [];
    this.prodForOrderId = 1;
    localStorage.removeItem('prodForOrderId');
    localStorage.removeItem('cardProducts');
  }

  submit() {
    console.log(this.products);
    this.removeAllProducts();
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

  getProdForOrderId() {
    let data = localStorage.getItem('prodForOrderId');
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }
}
