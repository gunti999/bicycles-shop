import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';
import { Comments, CommentsService } from 'src/app/services/comments/comments.service';
import { ProductRatingService } from 'src/app/services/rating/product-rating.service';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.scss']
})
export class ProductCommentsComponent implements OnInit {

  @Input() prodId?: number = 0;

  form: FormGroup = new FormGroup({
    commentTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    commentText: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ])
  })

  relatedComments: Comments[] = [];

  constructor(
    private commentService: CommentsService,
    public auth: AuthorizationService,
    public productRatingService: ProductRatingService
  ) {}

  ngOnInit(): void {
      this.relatedComments = this.commentService.getCommentsByProductId(this.prodId);
  }

  submit() {
    if (this.auth.logInUser?.id != undefined && this.prodId != undefined) {
      this.commentService.addComment({
        userId: this.auth.logInUser?.id,
        username: this.auth.logInUser.username,
        productId: this.prodId,
        commentTitle: this.form.value.commentTitle,
        commentText: this.form.value.commentText
      });
    } else {
      alert('Comments can be posted only by registered users!')
    }
    this.relatedComments = this.commentService.getCommentsByProductId(this.prodId);
    this.form.reset();
  }

}
