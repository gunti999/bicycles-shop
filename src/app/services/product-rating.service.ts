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

  constructor() {}

  getRatings(rating: Ratings) {
    this.ratings.push(rating);  
    console.log(this.ratings);
  }

}
