import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService} from '../../services/auth.service';


@Component({
    selector: 'app-login-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})

export class FormComponent {
  loginUsername: string;
  loginPassword: string;

  constructor(private loginService: LoginService, 
              private router: Router, 
              private authService: AuthService) { }

  ngOnInit() {
  }

  

  submitLogin = () => {
    this.loginService.login(this.loginUsername, this.loginPassword)
      .subscribe(res => {
        this.loginUsername = '';
        this.loginPassword = '';
        console.log('res from login is: ', res);
        console.log('res.status from login is: ', res.status);
        this.authService.isLoggedIn = true;
        this.router.navigateByUrl('');
      }, err => {
        console.log('err', err)
      });
  }
}