import { Component, OnInit } from '@angular/core';
import { SignupService } from './signup.service';
import { LoginService } from '../login/login.service';
import { AlertService } from '../services/alert.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  user: any = {};

  constructor(private signUpService: SignupService, private loginService: LoginService,
   private alertService: AlertService, private router: Router) { }

  ngOnInit() {
  }

  submitSignup = () => {
    this.signUpService.signUp(this.user.username, this.user.password, this.user.email, this.user.firstname, this.user.lastname)
    // this.loginService.login(this.user.username, this.user.password)
    .subscribe(res => {
      this.user.firstname = '';
      this.user.lastname = '';
      this.user.email = '';
      this.user.username = '';
      this.user.password = '';

    this.router.navigate(['/login'])
    this.alertService.success('Registration successful', true)
    }
    , err => {
      console.log('err', err);
    });
  }

}