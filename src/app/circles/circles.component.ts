import { Component, OnInit } from '@angular/core';
import { CirclesService } from '../services/circles.service';
import { HttpModule, JsonpModule } from '@angular/http';

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
              private DavidDataService: DavidDataService
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
  createCircle(){


  setCircles() {
    this.DavidDataService.getAllCurrentUserData(localStorage.getItem('userID'))
            .subscribe( (data) => {
                        var theData = data

                        for (var circle of theData.circlesObj) {
                          this.finalComparedCircles.push(circle.name);
                        }
          })
  }








  clicked(circle){
    console.log('circle clicked')
  }
  createCircle(){

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
    console.log('the circle clicked on is!', circleName);
    localStorage.setItem('currentCircle', circleName);

  circleClicked(circleName) {
    sessionStorage.setItem('circle',circleName)

  }

}
