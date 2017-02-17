import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {
  username: any = sessionStorage.getItem('username');
  newCircle: string;
  circles: any = ['Hack Reactor', 'Movies', 'Soccer'];
  clicked(val){
    sessionStorage.setItem('circle',val);
  }
  createCircle(){
    if(this.circles.indexOf(this.newCircle) === -1){
      this.circles.push(this.newCircle);
    }
    this.newCircle = null;
  }
  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem('circle')
  }

}
