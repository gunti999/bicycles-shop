import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { AddToCartService } from 'src/app/services/cart/cart.service';
import { AppDbProductsService, Product } from 'src/app/services/database/app-db-products.service';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';
import { ProductRatingService } from 'src/app/services/rating/product-rating.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product | undefined;
  notRatedByUser: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private appDb: AppDbProductsService,
    public productRating: ProductRatingService,
    public cartService: AddToCartService,
    private auth: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.appDb.getProductById(+params['id'])
    })).subscribe((product: Product | undefined) => {
      this.product = product;
      if (this.product) {
        this.product.rating = +this.productRating.getRatingsByProductId(this.product?.id);
      }
    })
  }

}
