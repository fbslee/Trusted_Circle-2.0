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
  getCircles () {
    console.log('inside getCircles function inside CirclesComponent')
    this._CirclesService.getCircles()
                      .subscribe( (data) => {
                        console.log("WHAT AM I???", data)
                        data.forEach((val)=>{
                          console.log(val);
                          this.circles.push(val.name)
                        }) 
                        console.log('list of Circles', this.circles)
                        }
                      )
  }//end getTopics

  getTopics() {
    console.log('inside getTopics function inside CirclesComponent')
    this._CirclesService.getTopics()
                      .subscribe( (data) => {
                        console.log("WHAT AM I???", data)
                        data.forEach((val)=>{
                          console.log(val);
                          this.circles.push(val.body)
                        }) 
                        console.log('list of rooms', this.circles)
                        }
                      )
  }//end getTopics

  circleClicked(circleName) {

     console.log('this is the Circle Name and clicked!', circleName,
     'Setting the Circle Session');
     sessionStorage.setItem('circle', circleName);
  }

}
