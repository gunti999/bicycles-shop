import { Injectable } from '@angular/core';

export interface Comments {
  userId: number,
  productId: number,
  commentTitle: string,
  commentText: string
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: Comments[] = []

  constructor() { }

  addComment(comment: Comments) {
    this.comments.push(comment);
    console.log('comments', this.comments);
    
  }

  getCommentsByProductId(id: number) {
    let productComments = this.comments.filter(el => el.productId === id);
    return productComments;
  }
}
