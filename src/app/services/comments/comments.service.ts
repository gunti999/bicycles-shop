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

  constructor() {
    this.comments = this.getComments();
  }

  addComment(comment: Comments) {
    this.comments.unshift(comment);
    this.setComments(this.comments);
    console.log(this.comments);
    
  }

  getCommentsByProductId(id?: number) {
    let productComments = this.comments.filter(el => el.productId === id);
    return productComments;
  }

  getComments() {
    let data = localStorage.getItem('userComments');
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  setComments(comments: Comments[]) {
    const jsonData = JSON.stringify(comments);
    localStorage.setItem('userComments', jsonData);
  }

}
