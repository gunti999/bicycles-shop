import { Injectable } from '@angular/core';
import { Product } from '../database/app-db-products.service';

export interface Order {
  orderId: number,
  userId?: number,
  products: Product[],
  date: number,
  user: {
    name: string,
    email: string,
    adress: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class PurchaseHistoryService {

  orders: Order[] = [];

  constructor() { }

  addOrder(data: Order) {
    this.orders.push(data);
    console.log(this.orders);
    
  }
}
