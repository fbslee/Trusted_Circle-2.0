import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class ChatService {

  private url = "http://localhost:3000"; //our server
  private socket: any;
  
  joinRoom (roomName: string) {
    console.log('room created with', roomName)
    sessionStorage.setItem('roomName', roomName);
    this.socket.emit('create', roomName);
  }


  sendMessage (message:string, username: string, roomName: string) {
    this.socket.emit('add-message', message, username, roomName);
  }

  getMessages() {
    let observable = new Observable( (observer: any) => {
      this.socket = io(this.url);
      this.socket.on('message', (data: any) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      }
    })
    return observable;
  }

  getUsername () {
    return sessionStorage.getItem('username')
  }

  setUsername (username: string) {
    console.log('username set: '+username);
    console.log(sessionStorage, 'from the setUsername in chat.services.ts');
    sessionStorage.setItem('username', username);
  }

}
