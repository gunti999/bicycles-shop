import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { Comments, CommentsService } from 'src/app/services/comments.service';

@Component({
  selector: 'app-product-comments',
  templateUrl: './product-comments.component.html',
  styleUrls: ['./product-comments.component.scss']
})
export class ProductCommentsComponent implements OnInit {

  @Input() prodId?: number = 0;

  form: FormGroup = new FormGroup({
    commentTitle: new FormControl('', [
      Validators.required
    ]),
    commentText: new FormControl('', [
      Validators.required
    ])
  })

  relatedComments: Comments[] = [];

  constructor(
    private commentService: CommentsService,
    private auth: AuthorizationService
  ) {}

  ngOnInit(): void {   
    // Not working this.prodId
    this.relatedComments = this.commentService.getCommentsByProductId(this.prodId);
    console.log('this.prodId', this.prodId);
  }

  submit() {
    if (this.auth.logInUser?.id != undefined && this.prodId != undefined) {
      this.commentService.addComment({
        userId: this.auth.logInUser?.id,
        productId: this.prodId,
        commentTitle: this.form.value.commentTitle,
        commentText: this.form.value.commentText
      });
    }
    console.log('commentsPorduct', this.relatedComments);
  }

}
