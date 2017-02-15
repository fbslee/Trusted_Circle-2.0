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

  constructor(private signUpService: SignupService) { }

  ngOnInit() {
  }

  submitSignup = () => {
    this.signUpService.signUp(this.inputUsername, this.inputPassword)
    .subscribe(res => {
      this.inputUsername = '';
      this.inputPassword = '';
    }, err => {
      console.log('err', err);
    });
  }

}