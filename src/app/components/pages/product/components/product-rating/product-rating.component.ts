import { Component, Input, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';
import { ProductRatingService } from 'src/app/services/rating/product-rating.service';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {

  @Input() prodId?: number = 0;
  ratingValue: number = 0;
  checkRaiting: boolean = false;

  constructor(
    private productRatingService: ProductRatingService,
    public auth: AuthorizationService
    ) {
    
  }

  ngOnInit(): void {
    this.productRated();
  }

  addRatings() {
    if (this.auth.logInUser?.id != undefined && this.prodId != undefined) {
      this.productRatingService.addRatings({
        userId: this.auth.logInUser?.id,
        productId: this.prodId,
        productRating: this.ratingValue
      })
      this.checkRaiting = true;
    } else {
      alert('Only a registered user can rate!');
    }
  }

  productRated() {
    if (this.auth.logInUser?.id != undefined && this.prodId != undefined) {
      let rating = this.productRatingService.getRating(this.auth.logInUser?.id, this.prodId);
      if (rating) {
        this.checkRaiting = true;
        this.ratingValue = rating.productRating ?? 0;
      }
    }
  }

}
