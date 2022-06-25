import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BasketContentComponent } from './components/basket-content/basket-content.component';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  constructor(private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  openDialogBasket() {
    const dialogRef = this.dialog.open(BasketContentComponent, {
      data: {
        title: 'Basket'
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);  
    })

    
  }


}
