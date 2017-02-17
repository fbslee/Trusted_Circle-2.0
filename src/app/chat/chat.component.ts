import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { HttpModule, JsonpModule } from '@angular/http';

// import * as Message from '../../../models/messages.model';

@Component({
  // moduleId: module.id,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy {

  messages: any = [];
  message: string;
  rooms: any = [];
  roomName: string;
  connection: any;
  usernameStatus: any = false;
  roomnameStatus: any = false;

  listOfRooms: any = [];
  errorMessage: string;


  username: string;
  alert: any = false;

  constructor(private _chatService: ChatService) {

   }

   ngOnInit() {
    this.connection = this._chatService.getMessages().subscribe(
      message => {
        console.log('ROOM NAME', this.roomName);
        console.log(message, 'this is from the chat component');
        console.log(sessionStorage.getItem('roomName'))

        
        this.messages.push(message)
        
      }
    )

    console.log('ngOnIT HAPPEN')
    this.getRoomlist()
    console.log('AHHHHHH')

    console.log(this.listOfRooms, 'After called in ngonit')
   }

   ngOnDestroy() {
      this.connection.unsubscribe();
   }

  getRoomlist() {
    console.log('inside chat ChatComponent')
    this._chatService.getRoomlist()
                      .subscribe( (data) => {
                        console.log("WHAT AM I???", data)
                        data.forEach((val)=>{
                          this.listOfRooms.push(val)
                        }) 
                        console.log('list of rooms', this.listOfRooms)
                        }
                      )
  }

  joinRoom () {
    console.log('chat ChatComponent', this.roomName)
     this.roomnameStatus = true;
     this._chatService.joinRoom(this.roomName);
   }

   sendMessage () {
    console.log('roomNAME IS!!!!', this.roomName);
     this._chatService.sendMessage(this.message, this.username, this.roomName);
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
