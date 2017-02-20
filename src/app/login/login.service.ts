import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private _http: Http) { }

  login(username, password) {
    return this._http.post('/api/login', {
      username: username,
      password: password
    });
  }

   getUserId () : Observable <any> {
    return this._http.get('/api/users')
                    .map( ( res:Response ) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }
}
