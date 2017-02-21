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

    console.log('data being transferred', this.DavidDataService.allCircles);
    var allCirclesArray = this.DavidDataService.allCircles;
    for(var circleObj of allCirclesArray) {
      //example circleObj = 
      // {id: 2, 
      //   name: "Test Circle 2", 
      //   totalMembers: 1, 
      //   createdAt: "2017-02-20T23:08:21.560Z", 
      //   updatedAt: "2017-02-20T23:08:21.560Z"
      // }
      console.log(circleObj);
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
