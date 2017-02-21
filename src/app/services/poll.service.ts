import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, JsonpModule, Response } from '@angular/http';

@Injectable()
export class PollService {

  constructor (private _http: Http) {}

  private url1 = "http://localhost:4200";

  sendPoll(): Observable<any> {
    console.log('INSIDE postTopics in service')
    return this._http.post(this.url1+'/api/poll', {
      yay: 'Yay'
    });
  }

//   getCircles(): Observable<any> {
//     console.log('INSIDE getCircleId in service topics')
//     return this.http.get(this.url1+'/api/circles')
//                     .map( ( res:Response ) => res.json() )
//                     .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
//   }

}
