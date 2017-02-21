import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  suggestor: string = sessionStorage.getItem('username');
  suggestedMember: string = sessionStorage.getItem('suggestedUsername');
  circle: string = sessionStorage.getItem('circle');
  
  constructor() { }

  accept(){
    console.log('accepted')
  }

  deny(){
    console.log('denied')
  }

  ngOnInit() {
  }

}
