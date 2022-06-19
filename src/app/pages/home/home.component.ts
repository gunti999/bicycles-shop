import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppDbProductsService } from 'src/app/services/app-db-products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryList: string[] = [];

  constructor(
    private router: Router,
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
