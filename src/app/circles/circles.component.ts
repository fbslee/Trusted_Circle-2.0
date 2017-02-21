import { Component, OnInit } from '@angular/core';
import { CirclesService } from '../services/circles.service';
import { HttpModule, JsonpModule } from '@angular/http';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {


  username: string = sessionStorage.getItem('username');
  newCircle: string;
  circlesUser: any = [];
  finalComparedCircles: any = [];
  circles: any = [];
  //['Hack Reactor', 'Movies', 'Soccer'];
  clicked(circle){
    sessionStorage.setItem('circle', circle)
  }
  createCircle(){
    if(this.circles.indexOf(this.newCircle) === -1){
      this.circles.push(this.newCircle);
    }
    this.newCircle = null;
  }
  constructor(private _CirclesService: CirclesService) { }

  ngOnInit() {
    sessionStorage.removeItem('circle')
    // this.getTopics();
    this.getCircles();
  }
  getCircles () { //this also checks if the user is part of the circle
    // console.log('inside getCircles function inside CirclesComponent')
    this._CirclesService.getCircles()
                      .subscribe( (data) => {
                        console.log("WHAT AM I???", data)
                        data.forEach((val)=>{
                          // console.log(val, ' this is val from getCircles from _CirclesService');
                          this.circles.push(val);
                        }) 
                        //CHECK RECIEVED DATA
                        // console.log(this.circles, 'this is the circles DATA')
                                            
                                            this._CirclesService.getUserCircles()
                                            .subscribe( (data1) => {
                                              // console.log("WHAT AM I getUserCircles???", data1)
                                              data1.forEach((val)=>{
                                                // console.log(val, 'from the getCircles');
                                                this.circlesUser.push(val);
                                              }) 

                                              //CHECKED RECIEVED DATA
                                              // console.log('list of userCircles', this.circlesUser, this.circles)

                                              for(var props of this.circlesUser ) {
                                                // console.log(props, 'THIS IS PROPS')
                                                for(var prop of this.circles) {
                                                  // console.log(prop, 'this is PROP!!~~~~~')
                                                  console.log(props.userId);
                                                  if(sessionStorage.getItem('userId') == props.userId) {
                                                  console.log('should be equal to 1:', props.userId, props)
                                                      if(props["circleId"] === prop["id"]) {
                                                        this.finalComparedCircles.push(prop["name"]);
                                                      }
                                                  }
                                                  // if(props.userId === sessionStorage.getItem('userId') 
                                                  // && prop["id"] === props.circleId
                                                  // && this.circles["id"] === this.circlesUser["circleId"] 
                                                  // ) {
                                                  //   console.log('FOUND ONE!!!')
                                                  //   this.finalComparedCircles.push(prop["name"])
                                                  // }
                                                    // if ( this.circlesUser[props] === "circleId" && this.circles[prop] === "id" &&
                                                    //     sessionStorage.getItem('userId') === this.circles[prop] && sessionStorage.getItem('userId') === this.circlesUser[props]) {
                                                    //     console.log('it showed here!');
                                                    //     this.finalComparedCircles.push(this.circles["name"]);
                                                    // }
                                                }
                                              }



                                              })

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

    console.log('this is the Circle Name and clicked!', circleName,
     'Setting the Circle Session');
     sessionStorage.setItem('circle', circleName);
  }

}
