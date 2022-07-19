import { Component, OnInit } from '@angular/core';
import { AddToCartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  constructor(
    public cartService: AddToCartService
  ) { }

  ngOnInit(): void {
  }

}
