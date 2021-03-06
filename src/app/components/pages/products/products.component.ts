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
  breakpoint = 0;

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
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
  }

  onResize(event: any) {
    if (event.target.innerWidth <= 880) {
      this.breakpoint = 1;
    } else if (event.target.innerWidth <= 1350) {
      this.breakpoint = 2;
    } else {
      this.breakpoint = 3;
    }  
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
