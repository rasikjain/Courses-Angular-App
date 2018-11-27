import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl
} from '@angular/forms';
import { get } from 'selenium-webdriver/http';
import { PasswordValidators } from './passwords.validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: [
        '',
        Validators.required,
        PasswordValidators.validOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  get oldPassword(): AbstractControl {
    return this.form.get('oldPassword');
  }
  get newPassword(): AbstractControl {
    return this.form.get('newPassword');
  }
  get confirmPassword(): AbstractControl {
    return this.form.get('confirmPassword');
  }
}
