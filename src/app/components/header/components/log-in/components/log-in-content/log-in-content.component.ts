import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-log-in-content',
  templateUrl: './log-in-content.component.html',
  styleUrls: ['./log-in-content.component.scss']
})
export class LogInContentComponent implements OnInit {

  form: FormGroup | any;
  hide: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthorizationService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    })
  }

  login() {
    this.auth.logIn(this.form.value.username, this.form.value.password);
    return this.auth.logInUser;
  }

}
