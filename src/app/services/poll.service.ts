import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, JsonpModule, Response, Headers } from '@angular/http';

@Injectable()
export class PollService {

  constructor (private _http: Http) {}

  private url = "http://localhost:4200";

  yes(): Observable<any> {
    console.log('INSIDE postpoll in service')
    return this._http.post('http://localhost:4200/api/poll', {
      test: 'Testing'
    })
  }
}
