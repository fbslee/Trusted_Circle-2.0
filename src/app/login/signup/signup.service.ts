import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SignupService {

  constructor(private _http: Http) { }

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
