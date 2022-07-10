import { Component, Input, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { ProductRatingService } from 'src/app/services/product-rating.service';

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
    private auth: AuthorizationService
    ) {
    
  }

  ngOnInit(): void {
    
  }

  addRatings() {
    if (this.auth.logInUser?.id != undefined && this.prodId != undefined) {
      this.productRatingService.getRatings({
        userId: this.auth.logInUser?.id,
        productId: this.prodId,
        productRating: this.ratingValue
      })
      this.checkRaiting = true;
    } else {
      alert('registration');
    }
  }

}
