import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { MessageService } from './services/Message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!'
}
