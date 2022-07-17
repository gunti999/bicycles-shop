import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AddToCartService } from 'src/app/services/cart/cart.service';
import { AppDbProductsService, Product } from 'src/app/services/database/app-db-products.service';
import { ProductRatingService } from 'src/app/services/rating/product-rating.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  prod: Product[] = [];
  filterCategoryList: string[] = [];
  filterCurrencyList: string[] = [];
  filterCountryList: string[] = [];
  category = '';
  currency = '';
  country = '';
  minPrice = 0;
  maxPrice = 0;
  rating = '';

  constructor(
    private router: Router,
    private appDb: AppDbProductsService,
    private activatedRoute: ActivatedRoute,
    public cartService: AddToCartService,
    public productRating: ProductRatingService
  ) { }

  productInfo() {
    this.router.navigate(['/product']);
  }

  ngOnInit(): void {
    this.getData();
    this.activatedRoute.queryParamMap.subscribe(paramMap => {
      this.category = paramMap.get('category') || '';
    })
  }

  getData() {
    this.appDb.getProducts().subscribe(prod => {
      this.prod = prod;
      this.updateProductRating();
      this.getFilterList();
      this.getMinMaxPrice();
    });
  }

  getFilterList() {
    this.prod.forEach(el => {
      if (!this.filterCategoryList.includes(el.category)) {
        this.filterCategoryList.push(el.category);
      }
      if (!this.filterCurrencyList.includes(el.description.currency)) {
        this.filterCurrencyList.push(el.description.currency);
      }
      if (!this.filterCountryList.includes(el.description.producingCountry)) {
        this.filterCountryList.push(el.description.producingCountry);
      }
    })
  }

  getMinMaxPrice() {
    let arr: number[] = [];
    this.prod.forEach(el => arr.push(el.description.price))
    arr.sort((a, b) => a - b);
    this.minPrice = arr[0];
    this.maxPrice = arr[arr.length - 1];
  }

  updateProductRating() {
    this.prod.forEach(el => {
      el.rating = +this.productRating.getRatingsByProductId(el.id);
    })
  }
}
