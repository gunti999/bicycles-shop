import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-product-rating',
  templateUrl: './product-rating.component.html',
  styleUrls: ['./product-rating.component.scss']
})
export class ProductRatingComponent implements OnInit {

  ratingValue: number = 0;

  constructor(private commentService: CommentsService) {
    
  }

  ngOnInit(): void {
    
  }

  getRatingNumber() {
    this.commentService.getRatingOfProduct(this.ratingValue);
  }

}
