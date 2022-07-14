import { Component, OnInit } from '@angular/core';
import { AppDbProductsService } from 'src/app/services/database/app-db-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryList: string[] = [];

  constructor(
    private appDb: AppDbProductsService
  ) { }

  ngOnInit(): void {
    this.appDb.getProducts().subscribe(prod => {
      prod.forEach(el => {
        if (!this.categoryList.includes(el.category)) {
          this.categoryList.push(el.category);
        }
      })
    })
  }

}
