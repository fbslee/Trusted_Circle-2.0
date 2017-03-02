import { Component, OnInit, Input } from '@angular/core';
import { Message } from './message.model';
import { Comment } from './comment.model';

import { MessageService } from '../services/message.service'

@Component({
    selector: 'app-message-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.scss']
})
export class CommentComponent implements OnInit {
    messages: Message[];
    @Input() comments: Comment[];
    // username: string = localStorage.getItem('username');

    constructor(private messageService: MessageService) {
    // setTimeout(() => {
    //     this.messageService.getMessages();
    //     }, 2000);
        }


    ngOnInit() {
      
    }
    
}
