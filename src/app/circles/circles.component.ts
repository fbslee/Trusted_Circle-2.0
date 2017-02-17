import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circles',
  templateUrl: './circles.component.html',
  styleUrls: ['./circles.component.scss']
})
export class CirclesComponent implements OnInit {
  circles: any = ['Hack Reactor', 'Movies', 'Soccer']
  constructor() { }

  ngOnInit() {
  }

}
