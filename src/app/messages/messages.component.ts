import { Component } from '@angular/core';
import { DavidDataService } from '../services/david-data.service';

@Component({
  selector: 'app-messages',
  template: `
    <div class="container">

  <div class="row">
  <app-message-input></app-message-input>
  </div>
  <hr>
  <div class="row">
    <app-message-list></app-message-list>
  </div></div>
  `,
    styleUrls: ['./messages.component.scss']


})
export class MessagesComponent {

constructor (private DavidDataService: DavidDataService) {

}

ngOnInit () {

}



}
