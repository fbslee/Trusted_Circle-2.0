import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessageService } from '../services/message.service'

@Component({
    selector: 'app-message-list',
    template: `
        <div class="col-md-8 col-md-offset-2">
            <app-message
                   [message]="message"
                    *ngFor="let message of messages"></app-message>
        </div>
    `
})
export class MessageListComponent implements OnInit {
    messages: Message[];
    // username: string = localStorage.getItem('username');

    constructor(private messageService: MessageService) {}

    ngOnInit() {
       this.messageService.getMessages()
       .subscribe( (data) => {
           console.log('this is messages data inside list', data) 
           console.log(this.username, 'this is the username from message page')
           this.messages = data;
    }
        // console.log()  
       );
    }
}
