import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService} from '../services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  user: any = {};

  constructor(private loginService: LoginService, 
              private router: Router, 
              private authService: AuthService) { }

  ngOnInit() {
  }

  submitLogin = () => {
    this.loginService.login(this.user.username, this.user.password)
      .subscribe(res => {
        this.user.username = '';
        this.user.password = '';
        console.log('res from login is: ', res);
        console.log('res.status from login is: ', res.status);
        this.authService.isLoggedIn = true;
        this.router.navigateByUrl('');
      }, err => {
        console.log('err', err)
        console.log('?')
      });
  }
}
