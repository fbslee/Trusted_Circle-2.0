import { Component, OnInit } from '@angular/core';
import { PollService } from '../services/poll.service';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.component.html',
  styleUrls: ['./poll.component.scss']
})
export class PollComponent implements OnInit {
  suggestedMember: string = sessionStorage.getItem('suggestedUsername')
  circle: string = sessionStorage.getItem('circle')

  constructor(private _PollService: PollService) { }


  Yes(){
    this._PollService.sendPoll()
  }

  ngOnInit() {
  }

}
