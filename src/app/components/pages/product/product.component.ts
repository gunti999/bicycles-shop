import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { AppDbProductsService, Product } from 'src/app/services/app-db-products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private appDb: AppDbProductsService
    ) {}

  ngOnInit(): void {
    this.route.params.pipe(switchMap((params: Params) => {     
      return this.appDb.getProductById(+params['id'])
    })).subscribe((product: Product | undefined) => {
      this.product = product;
    })
  }

}
