import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';
import { AddToCartService } from 'src/app/services/cart/cart.service';
import { PurchaseHistoryService } from 'src/app/services/history/purchase-history.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    adress: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ])
  })

  orderId: number = 100;

  constructor(
    public cartService: AddToCartService,
    private purchaseHistoryService: PurchaseHistoryService,
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.orderId = this.getData();
  }

  orderSum() {
    let sum = 0;
    this.cartService.products.forEach(el => {
      sum += el.description.price;
    })
    return sum;
  }

  submit() {
    this.purchaseHistoryService.addOrder({
      orderId: this.orderId,
      userId: this.authorizationService.logInUser?.id,
      products: this.cartService.products,
      date: Date.now(),
      user: {
        name: this.form.value.name,
        email: this.form.value.email,
        adress: this.form.value.adress
      }
    })
    this.cartService.removeAllProducts();
    this.orderId++;
    localStorage.setItem('orderId', String(this.orderId));
    this.form.reset();
    this.navigateToHistory();
  }

  getData() {
    let id = localStorage.getItem('orderId');
    if (id != null) {
      return +id;
    } else {
      return this.orderId;
    }
  }

  navigateToHistory() {
    this.router.navigate(['/history']);
  }
}
