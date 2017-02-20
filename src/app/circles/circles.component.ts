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
    this.getTopics();
  }

  getTopics() {
    console.log('inside getTopics function inside CirclesComponent')
    this._CirclesService.getTopics()
                      .subscribe( (data) => {
                        console.log("WHAT AM I???", data)
                        data.forEach((val)=>{
                          this.circles.push(val)
                        }) 
                        console.log('list of rooms', this.circles)
                        }
                      )
  }//end getTopics

}
