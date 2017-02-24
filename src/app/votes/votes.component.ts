import { Component, OnInit } from '@angular/core';
import { VoteService } from '../services/vote.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  suggestor: string;
  suggestedMember: string;
  circle: string;
  pollId: number;
  voteId: number;
  isDataAvailable: boolean = false;
  
  constructor(private _VoteService: VoteService) { }

  accept(){
    console.log('accepted')
  }

  deny(){
    console.log('denied')
  }

  ngOnInit() {
    this._VoteService.getVote()
    .subscribe(data => {
      this.suggestedMember = data._body.suggestedMember
      this.suggestor = data._body.suggestor
      this.circle = data._body.suggestor
      this.pollId = data._body.pollId
      this.voteId = data._body.voteId
      this.isDataAvailable = true;
      console.log(data._body, 'data from my get request')
    })
  }

}
