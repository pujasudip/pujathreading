import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.sass']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  passwordMatch = true;

  constructor() { }

  ngOnInit() {
    this.signUpForm = new FormGroup({
      'firstName': new FormControl(null, Validators.required),
      'lastName': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    // console.log('form:', this.signUpForm);
  }

  matchPassword() {
    const password = this.signUpForm.value['password'];
    const cPassword = this.signUpForm.value['confirmPassword'];

    if ( password !== cPassword) {
      this.passwordMatch = false;
    }
  }

  fieldOnFocus() {
    this.passwordMatch = true;
  }

}
