import { Component, OnInit } from '@angular/core';
import { CirclesService } from '../services/circles.service';
import { Http, HttpModule, Response, Headers, JsonpModule } from "@angular/http";

import { DavidDataService } from '../services/david-data.service';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {


  username: string = localStorage.getItem('username');
  newCircle: string;
  circlesUser: any = [];
  finalComparedCircles: any = [];
  circles: any = [];
  //['Hack Reactor', 'Movies', 'Soccer'];

  constructor(private _CirclesService: CirclesService,
              private DavidDataService: DavidDataService,
              private http: Http
              ) { }

  ngOnInit() {
    sessionStorage.removeItem('circle')
    // this.getTopics();
    // this.getCircles();
    // this.getCurrentUserCircles();
    this.setCircles();
  }


  clicked(circle){
    console.log('circle clicked')
    sessionStorage.setItem('circle',circle)
  }


  setCircles() {
    this.DavidDataService.getAllCurrentUserData(localStorage.getItem('userID'))
            .subscribe( (data) => {
                        var theData = data

                        for (var circle of theData.circlesObj) {
                          this.finalComparedCircles.push([circle.name,circle.id]);
                          console.log(this.finalComparedCircles)
                        }
          })
  }

  getCircles () { 
    console.log('users to circle', this.DavidDataService.allUserCircles);
    console.log('current user logged in', localStorage.getItem('userID'));
    var currentUser = localStorage.getItem('userID');
    console.log('just circles', this.DavidDataService.allCircles);
    var allUserCirclesArray =  this.DavidDataService.allUserCircles;
    var allCirclesArray = this.DavidDataService.allCircles;
    for(var UserCircleObj of allUserCirclesArray) {
      for(var circleObj of allCirclesArray) {
        if(UserCircleObj.circleId === circleObj.id) {
          console.log(UserCircleObj["userId"] === currentUser);
          if(UserCircleObj["userId"].toString() === currentUser) {
          // console.log('this user has access', UserCircleObj.userId)
            this.finalComparedCircles.push(circleObj.name);
            console.log(this.DavidDataService.currentUsername, 'current username')

          }
        }
      }
    }
  }

  getCurrentUserCircles() {
    // console.log('inside getTopics function inside CirclesComponent')
    this.DavidDataService.getCurrentUserCircles()
                      .subscribe( (data) => {
                        console.log(this.DavidDataService.currentUserCirclesBelong);
                        console.log(data, 'this is data and its subscribed');
                        }) 
            
  }//end getTopics

  getTopics() {
    // console.log('inside getTopics function inside CirclesComponent')
    this._CirclesService.getTopics()
                      .subscribe( (data) => {
                        // console.log("WHAT AM I???", data)
                        data.forEach((val)=>{
                          // console.log(val);
                          this.circles.push(val.body)
                        }) 
                        // console.log('list of rooms', this.circles)
                        }
                      )
  }//end getTopics

  circleClicked(circleName) {
    // console.log('the circle clicked on is!', circleName);
    for(var circle of this.finalComparedCircles) {
      // console.log('these are the circles!', circle);
      if(circleName === circle[0]) {
        localStorage.setItem('currentCircleId', circle[1]);
        // console.log('this is the circles id', circle[1]);
      }
    }
    localStorage.setItem('currentCircle', circleName);
  }


  createCircle(name) {

    console.log(name);
    let body = {
      body: name,
      userId: localStorage.getItem('userID') || sessionStorage.getItem('userId')
    }
    console.log(body);

    let headers = new Headers({'Content-Type': 'application/json'});

    var nameCheck = name;

    if (name) {
              this.http.get('/api/circles/'+nameCheck).map(res => res.json()).subscribe((data) => {
              console.log(data, 'this is the returned data from the nameCheckGet')

              if(data.length !== 0) {
                      return alert('That Circle Already Exists!');
              } else {
                this.newCircle = '';
                      return this.http.post('/api/circles', body, {headers: headers})
                      .map(res => res.json()).subscribe((data) => {
                        // this.finalComparedCircles.push([body.body, data.topicId]);
                        // this.finalComparedCircles.push()
                        this.finalComparedCircles.push([ name, data.circleId]);
                        console.log(data, 'this is the returned data/1')
                      })

              }
            })   
    } else {
        return alert('Please Have a Valid Name for a Circle!')
    }

  }

}
