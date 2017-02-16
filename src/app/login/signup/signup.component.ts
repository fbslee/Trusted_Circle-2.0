import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
    selector: 'app-signup-form',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
  inputUsername: string;
  inputPassword: string;
  inputEmail: string;
  inputFirstname: string;
  inputLastname: string;

  constructor(private signUpService: SignupService) { }

  ngOnInit() {
  }

  submitSignup = () => {
    this.signUpService.signUp(this.inputUsername, this.inputPassword, this.inputEmail, this.inputFirstname, this.inputLastname)
    .subscribe(res => {
      this.inputFirstname = '';
      this.inputLastname = '';
      this.inputEmail = '';
      this.inputUsername = '';
      this.inputPassword = '';
    }, err => {
      console.log('err', err);
    });
  }

}