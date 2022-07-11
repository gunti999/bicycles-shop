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
    
      this.ratings = this.getRatings();
    
  }

  addRatings(rating: Ratings) {
    this.ratings.push(rating);
    localStorage.setItem('rating', JSON.stringify(this.ratings));
  }

  getRating(userId: number, productId: number) {
    return this.ratings.find(el => el.userId == userId && el.productId == productId);
  }

  getRatings() {
    let data = localStorage.getItem('rating');
    if (data != null) {
      return JSON.parse(data);
    } else {
      return [];
    }
  }

  getRatingsByProductId(productId: number) {
    let ratingArr = this.ratings.filter(el => el.productId == productId);
    let sum = 0;
    ratingArr.forEach(el => {
      sum += +(el.productRating ?? 0);
    })
    if (ratingArr.length != 0) {
      return (sum / ratingArr.length).toFixed(1);
    } else {
      return sum;
    }
  }

}
