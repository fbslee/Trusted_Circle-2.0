import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, JsonpModule, Response } from '@angular/http';

@Injectable()
export class DavidDataService {
  //example to store shit
  //private storeDummyData
private storeDummyData: any;
public allUsers: any;
public allTopics: any;
public allUserTopics: any;
public allUserCircles: any;
public allCircles: any;

public currentCircle: any;
public currentUsername: any;
public currentUserId: any;
public currentTopic: any; 

public currentUserCirclesBelong: any;
public currentUserTopicBelong: any; 

  constructor(private http: Http) { }

  getUsers(): Observable<any> {
    console.log('INSIDE DAVID service for getUsers')

    var data = this.http.get('/api/users')
                    .map( ( res:Response ) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))

    this.allUsers = data;
    return data;
  }

  getTopics(): Observable<any> {
    console.log('INSIDE DAVID service for getTopics')
     var data = this.http.get('/api/topics')
                    .map( ( res:Response ) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    this.allTopics = data;
    return data;
  }

  getUsersTopics(): Observable<any> {
    console.log('INSIDE getUSersTopics in service')
     var data = this.http.get('/api/users_topics')
                    .map( ( res:Response ) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    this.allUserTopics = data;
    return data;
  }

  getUsersCircles(): Observable<any> {
    console.log('INSIDE get/users_circles in service')
     var data = this.http.get('/api/users_circles')
                    .map( ( res:Response ) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    this.allUserCircles = data;
    return data;
  }
  
  getCircles(): Observable<any> {
    console.log('INSIDE getCircleId in service topics')
     var data = this.http.get('/api/circles')
                    .map( ( res:Response ) => res.json() )
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    this.allCircles = data;
    return data;
  }

}
