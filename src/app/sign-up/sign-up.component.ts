import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {SignUpService} from '../shared/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  passwordMatch = true;

  constructor(private signUpService: SignUpService) { }

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
    this.signUpService.accountCreation(this.signUpForm.value).subscribe(
      (resp) => {
        console.log('response:', resp);
      }
    );
    // console.log('form:', this.signUpForm.value);
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
