import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorizationService } from 'src/app/services/authorization/authorization.service';

@Component({
  selector: 'app-registration-content',
  templateUrl: './registration-content.component.html',
  styleUrls: ['./registration-content.component.scss']
})
export class RegistrationContentComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(6)
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required
    ])
  }, {
    validators: this.confirmPasswordValidation
  });
  hideMain: boolean = true;
  hideRepeat: boolean = true;
  errorMessage: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public auth: AuthorizationService 
    ) {

  }

  ngOnInit(): void {
    
  }

  confirmPasswordValidation(control: AbstractControl) {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if (password?.value === confirmPassword?.value) {
      return null;
    } else {
      confirmPassword?.setErrors({passwordsNotMatch: true})
      return {passwordsNotMatch: true}
    }
  }

  getConfirmPasswordErrorMessage() {
    if (this.form.hasError('passwordsNotMatch')) {
      return 'Your passwords do not match';
    } else {
      return 'At least 6 characters';
    }
  }

  submit() {
    this.auth.registration(this.form.value);
    if (this.auth.notCorrectUsername) {
      this.form.get('username')?.setErrors({notCorrectUsername: true})
    }
    this.auth.setData(this.auth.users);
  }

}
