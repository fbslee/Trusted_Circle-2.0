import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from '../messages/message.model';

@Injectable()

export class MessageService {

    constructor(private _http: Http) {}

    private messages: Message[] = [];

    addMessage(message: Message) {
        console.log('in service', message)
        let newmessage = {
            body: message.content,
            username: message.username,
            userid: message.userId
        }
        
        this.messages.push(message);
        console.log(this.messages);
        // return this._http.post('/api/newmessage', );
    }

    getMessages() {
        return this.messages;
    }

    updateMessage() {

 }
    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}