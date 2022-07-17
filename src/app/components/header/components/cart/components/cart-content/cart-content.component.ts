import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddToCartService } from 'src/app/services/cart/cart.service';
import { AppDbProductsService } from 'src/app/services/database/app-db-products.service';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.scss']
})
export class CartContentComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public cartService: AddToCartService,
    public productsService: AppDbProductsService
    ) { }

  ngOnInit(): void {
  }

  orderSum() { 
    let sum = 0;
    this.cartService.products.forEach(el => {
      sum += el.description.price;
    })
    return sum;
  }

}
