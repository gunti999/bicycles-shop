import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../services/app-db-products.service';

@Pipe({
  name: 'productsFilter'
})
export class ProductsFilterPipe implements PipeTransform {

  transform(
    prods: Product[],
    category: string,
    currency: string,
    country: string,
    minPrice: number,
    maxPrice: number
  ): Product[] {
    console.log(minPrice, maxPrice);

    if (category) {
      prods = prods.filter(p => p.category == category)
    }
    if (currency) {
      prods = prods.filter(p => p.description.currency == currency)
    }
    if (country) {
      prods = prods.filter(p => p.description.producingCountry == country)
    }
    if (maxPrice >= minPrice) {
      prods = prods.filter(el =>
        el.description.price >= minPrice && el.description.price <= maxPrice)
    }

    return prods;
  }
}
