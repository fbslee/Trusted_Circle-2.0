import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, JsonpModule, Response } from '@angular/http';

@Injectable()
export class PollService {

  constructor (private http: Http) {}

  private url = "http://localhost:4200";

  sendPoll(): Observable<any> {
    return this.http.post(this.url+'/api/poll')
  }

  getUsers(): Observable<any> {
    console.log('INSIDE getTopics in service')
    return this.http.get(this.url+'/api/users')
                    .map( ( res:Response ) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  getTopics(): Observable<any> {
    console.log('INSIDE getTopics in service')
    return this.http.get(this.url+'/api/topics')
                    .map( ( res:Response ) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  getCircles(): Observable<any> {
    console.log('INSIDE getCircleId in service topics')
    return this.http.get(this.url+'/api/circles')
                    .map( ( res:Response ) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

}
