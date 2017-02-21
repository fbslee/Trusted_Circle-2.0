import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from '../messages/message.model';

@Injectable()

export class MessageService {

    constructor(private http: Http) {}

    private messages: Message[] = [];


    addMessage(message: Message) {
        let body = JSON.stringify(message);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:4200/api/messages', body, {headers: headers})
            .map((response: Response) => {
                let result = response.json();
                let message = new Message(result.obj.body, 'Dummy', result.obj._id, null);
                console.log('inner message', message);
                this.messages.push(message);
                console.log(message)
                return message;
            })
            .catch((error: Response) => Observable.throw(error.json() || 'Server error'));

    }


     getMessages() {
        return this.http.get('http://localhost:4200/api/messages')
            .map((response: Response) => {
                const messages = response.json().obj;
                console.log(messages);
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.body, 'Dummy', message._id, null));
                }
                this.messages = transformedMessages;
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('http://localhost:4200/api/messages/' + message.messageId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json() || 'Server error'));
    }

    deleteMessage(message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    }
}