import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Http, JsonpModule, Response } from '@angular/http';

@Injectable()
export class CirclesService {

  constructor (private http: Http) {}

  private url1 = "http://localhost:4200"; //our server
  private socket: any;

  // postTopics(): Observable<any> {
  //   console.log('INSIDE getTopics in service')
  //   return this.http.post(this.url1+'/api/topics')
  //                   .map( ( res:Response ) => res.json() )
  //                   .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  // }

  getCircles(): Observable<any> {
    console.log('INSIDE getTopics in service')
    return this.http.get(this.url1+'/api/circles')
                    .map( ( res:Response ) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

  getTopics(): Observable<any> {
    console.log('INSIDE getTopics in service')
    return this.http.get(this.url1+'/api/topics')
                    .map( ( res:Response ) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
  }

}
