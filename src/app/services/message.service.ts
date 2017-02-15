import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Message } from '../../../models/messages.model';


@Injectable()
export class MessageService {
    private messages: Message[] = [];
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http) {}

        editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }
        deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
        return this.http.delete('http://localhost:3000/message/' + message)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
};