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

  constructor() {
    if (this.getOrders() != undefined) {
      this.orders = this.getOrders();
    }
      
      console.log(this.orders);
      
  }

  addOrder(data: Order) {
    this.orders.push(data);
    this.setOrders(this.orders);
    console.log(this.orders); 
  }

  setOrders(data: Order[]) {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('OrdersList', jsonData);
  }

  getOrders() {
    let orders = localStorage.getItem('OrdersList');
    if (orders != null) {
      return JSON.parse(orders);
    } else {
      return undefined;
    }
  }

  getOrdersByUserId(userId: number) {
    let userOrders = this.orders.filter(el => el.userId === userId);
    return userOrders;
  }
}
