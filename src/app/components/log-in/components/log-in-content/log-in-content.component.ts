import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-log-in-content',
  templateUrl: './log-in-content.component.html',
  styleUrls: ['./log-in-content.component.scss']
})
export class LogInContentComponent implements OnInit {

  hide: boolean = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

}
