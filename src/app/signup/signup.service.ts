import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthGuard } from '../services/auth-guard.service';

@Injectable()
export class SignupService {

  constructor(private _http: Http, private authGuard: AuthGuard) { }

  signUp(username, password, email, firstname, lastname) {
    console.log('signup works', username)
    return this._http.post('/api/signup', {
      username: username,
      password: password,
      email: email,
      firstname: firstname,
      lastname: lastname
    });

  }
}
