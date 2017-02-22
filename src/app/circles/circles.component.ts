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
    this.getCircles();
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

  }

}
