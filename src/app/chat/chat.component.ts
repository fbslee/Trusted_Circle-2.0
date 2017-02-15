import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from '../services/chat.service';

@Component({
  // moduleId: module.id,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  messages: any = [];
  message: string;
  connection: any;
  usernameStatus: any = false;

  username: string;
  alert: any = false;

  constructor(private _chatService: ChatService) {

   }

   ngOnInit() {
    this.connection = this._chatService.getMessages().subscribe(
      message => {
        console.log(message);
        this.messages.push(message)
      }
    )
   }

   ngOnDestroy() {
      this.connection.unsubscribe();
   }

   sendMessage () {
     this._chatService.sendMessage(this.message, this.username);
     this.message = '';
   }

   setUsername() {
     this._chatService.setUsername(this.username);
     console.log('setUsername SET!!!')
     if(this.username) {
     this.usernameStatus = true;
     }
     this.alert = 'Username is set';
   }
}
