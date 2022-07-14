import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddToCartService } from 'src/app/services/cart/add-to-cart.service';
import { CartContentComponent } from './components/cart-content/cart-content.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public addToCartService: AddToCartService
    ) { }

  ngOnInit(): void {
  }

  openDialogBasket() {
    const dialogRef = this.dialog.open(CartContentComponent, {
      data: {
        title: 'Basket'
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);  
    })

    
  }


}
