import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, JsonpModule, Response, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class VoteService {

  constructor (private _http: Http) {}

  private url = "http://localhost:4200";

  getVote(): Observable<any> {
    console.log('GET REQUEST FOR VOTE')
    // let params = new URLSearchParams();
    // params.set('username', username)
    return this._http.get('http://localhost:4200/api/votes')
  }
}
