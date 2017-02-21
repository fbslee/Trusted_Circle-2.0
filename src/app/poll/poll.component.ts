import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  suggestedMember: string = sessionStorage.getItem('suggestedUsername')
  circle: string = sessionStorage.getItem('circle')
  constructor() { }

  ngOnInit() {
  }

}
