import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-basket-content',
  templateUrl: './basket-content.component.html',
  styleUrls: ['./basket-content.component.scss']
})
export class BasketContentComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
