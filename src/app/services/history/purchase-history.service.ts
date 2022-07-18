import { Injectable } from '@angular/core';
import { Product } from '../database/app-db-products.service';

export interface Orders {
  id: number,
  userId: number,
  products: Product[] 
}

@Injectable({
  providedIn: 'root'
})
export class PurchaseHistoryService {

  constructor() { }

  
}
