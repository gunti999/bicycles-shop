import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

export interface Ratings {
  userId: number,
  productId: number,
  productRating?: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductRatingService {

  ratings: Ratings[] = [];

  constructor() {
    this.ratings = JSON.parse(localStorage.getItem('rating') ?? '');
  }

  addRatings(rating: Ratings) {
    this.ratings.push(rating);
    localStorage.setItem('rating', JSON.stringify(this.ratings));
  }

  getRating(userId: number, productId: number) {
    return this.ratings.find(el => el.userId == userId && el.productId == productId);
  }

  getRatingsByProductId(productId: number) {
    return this.ratings.find(el => el.productId == productId);
  }

}
