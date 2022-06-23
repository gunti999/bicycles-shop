import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorizationService } from 'src/app/services/authorization.service';

@Component({
  selector: 'app-registration-content',
  templateUrl: './registration-content.component.html',
  styleUrls: ['./registration-content.component.scss']
})
export class RegistrationContentComponent implements OnInit {

  form: FormGroup | any;
  hideMain: boolean = true;
  hideRepeat: boolean = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthorizationService 
    ) {

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ]),
      repeatPassword: new FormControl(null, [
        Validators.required,
        Validators.minLength(4)
      ])
    })
  }

  submit() {
    this.auth.registration(this.form.value);
    this.auth.setData(this.auth.users);
  }

}