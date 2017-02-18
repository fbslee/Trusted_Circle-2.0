import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  suggestor: string = 'Felipe';
  suggestedMember: string = 'David';
  circle: string = 'Team Passive';
  
  constructor() { }

  ngOnInit() {
  }

}
