import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorizationService } from 'src/app/services/authorization.service';
import { CommentsService } from 'src/app/services/comments.service';

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

  constructor(
    private comment: CommentsService,
    private auth: AuthorizationService
  ) { }

  ngOnInit(): void {
  }

  submit() {
    if (this.auth.logInUser?.id != undefined && this.prodId != undefined) {
      this.comment.addComment({
        userId: this.auth.logInUser?.id,
        productId: this.prodId,
        commentTitle: this.form.value.commentTitle,
        commentText: this.form.value.commentText
      });
    }
  }

}
