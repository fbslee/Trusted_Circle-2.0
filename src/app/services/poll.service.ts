import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, JsonpModule, Response } from '@angular/http';

@Injectable()
export class PollService {

  constructor (private _http: Http) {}

  private url = "http://localhost:4200";

  yes() {
    console.log('INSIDE postTopics in service')
    return this._http.post(this.url+'/api/poll', {
      test: 'Testing'
    });
  }
}
