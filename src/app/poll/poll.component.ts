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
  suggestor: string = localStorage.getItem('username')
  showThis: boolean = true
  pollCreated: boolean = false

  constructor(private _PollService: PollService) { }


  yes(){
    console.log(this.suggestedMember, this.circle, this.suggestor)
    this._PollService.yes(this.suggestedMember, this.circle, this.suggestor).subscribe(data => console.log(data, 'dis da data'))
    this.showThis = false
    this.pollCreated = true
  }

  ngOnInit() {
  }

}
