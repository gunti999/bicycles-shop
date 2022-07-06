import { Injectable } from '@angular/core';

export interface Comments {
  userId: number,
  username: string,
  productId: number,
  commentTitle: string,
  commentText: string
}

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: Comments[] = [];

  constructor() { }

  addComment(comment: Comments) {
    this.comments.push(comment);  
  }

  getCommentsByProductId(id?: number) {
    let productComments = this.comments.filter(el => el.productId === id);
    return productComments;
  }
}
