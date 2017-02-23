import { Http, Response, Headers, JsonpModule } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Message } from '../messages/message.model';

@Injectable()

export class MessageService {

    constructor(private http: Http) {}

    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    addMessage(message: Message) {
        let body = JSON.stringify(message);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/api/messages', body, {headers: headers})
            .map((response: Response) => {
                let result = response.json();
                console.log('result', result);
                let message = new Message(result.body, 'Dummy', result.id, null);
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => Observable.throw(error.json() || 'Server error'));



    }

     getMessages() {
        return this.http.get('/api/messages')
            .map((response: Response) => {
                let messages = response.json();
                console.log('inside getMessages in service', messages);
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                    transformedMessages.push(new Message(message.body, 'Dummy', message.id, null));
                }
                this.messages = transformedMessages;
                console.log('transformedMessages ', transformedMessages);
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json() || 'Server error'));
    }
    editMessage(message: Message){
        this.messageIsEdit.emit(message);

    }

    updateMessage(message: Message) {
        let body = JSON.stringify(message);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('/api/messages/' + message.messageId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json() || 'Server error'));
    }


    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete('/api/messages/' + message.messageId)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json() || 'Server error'));
    }
}