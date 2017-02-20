import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { trigger, state, animate, style, transition } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService} from '../services/auth.service';
import { AlertService } from '../services/alert.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  user: any = {};

  constructor(private loginService: LoginService, 
              private router: Router, 
              private authService: AuthService,
              private alertService: AlertService) { }

  ngOnInit() {
  }

  submitLogin = (value) => {
    console.log(value);
    
    this.loginService.login(this.user.username, this.user.password)
      .subscribe(res => {
        sessionStorage.setItem('username', this.user.username);


        

        this.loginService.getUserId()
                                .subscribe( (data) => {
                                  console.log("WHAT AM I???", data)
                                  data.forEach((val)=>{
                                    console.log('this is val:', val)
                                    if(val["username"] === sessionStorage.getItem('username') ) {
                                      sessionStorage.setItem('userId', val["id"])
                                    }

                                  }) 
                                  // console.log('list of topics', this.topics)
                                  }
                                )//end getTopics function




        this.user.username = '';
        this.user.password = '';

        console.log('res from login is: ', res);
        console.log('session username is:', sessionStorage.getItem('username'))
        console.log('res.status from login is: ', res.status);
        this.authService.isLoggedIn = true;
        this.alertService.clear();
        this.router.navigate(['']);
      }, err => {
        console.log('err', err)
      });
  }
}
