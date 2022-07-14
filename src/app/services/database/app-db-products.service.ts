import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Product {
  id: number,
  name: string,
  category: string,
  bgImageUrl: string,
  description: {
    weight: number,
    frameMaterial: string,
    price: number,
    currency: string,
    numberOfSpeeds: number,
    producingCountry: string
  },
  rating: number
}

@Injectable({
  providedIn: 'root'
})
export class AppDbProductsService {

  products: Product[] = [];

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/database/db-products.json');
  }

  getProductById(id: number) {
    return this.getProducts().pipe(map((arr) => {
      return arr.find((el) => {
        return el.id === id;
      })
    }))
  }

}
