import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDbProductsService, Product } from 'src/app/services/app-db-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  prod: Product[] = [];

  constructor(
    private router: Router,
    private appDb: AppDbProductsService
    ) {}

  productInfo() {
    this.router.navigate(['/product']);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.appDb.getProducts().subscribe(prod => {
      console.log(prod);
      this.prod = prod
    });
  }

}
