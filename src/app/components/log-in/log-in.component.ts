import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LogInContentComponent } from './components/log-in-content/log-in-content.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogLogIn() {
    const dialogRef = this.dialog.open(LogInContentComponent, {
      data: {
        title: 'log in'
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }


}
