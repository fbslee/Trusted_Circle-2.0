import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  user: any = {};

  constructor(private signUpService: SignupService) { }

  ngOnInit() {
  }

  submitSignup = () => {
    this.signUpService.signUp(this.user.username, this.user.password, this.user.email, this.user.firstname, this.user.lastname)
    .subscribe(res => {
      this.user.firstname = '';
      this.user.lastname = '';
      this.user.email = '';
      this.user.username = '';
      this.user.password = '';
    }, err => {
      console.log('err', err);
    });
  }

}