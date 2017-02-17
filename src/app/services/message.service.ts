import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from '../messages/message.model';


export class MessageService {
    private messages: Message[] = [];

    addMessage(message: Message) {
        this.messages.push(message);
        console.log(this.messages);
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