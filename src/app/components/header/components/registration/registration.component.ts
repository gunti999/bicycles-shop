import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationContentComponent } from './components/registration-content/registration-content.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialogRegistration() {
    const dialogRef = this.dialog.open(RegistrationContentComponent, {
      data: {
        title: 'registration'
      }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    })
  }
}
