import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Message } from './message.model';
import { Comment } from './comment.model';

import { Observable } from 'rxjs/Observable';
import { Http, JsonpModule, Response, Headers } from '@angular/http';
import { MessageService } from '../services/message.service'

@Component({
    selector: 'app-message-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.scss']
})
export class CommentComponent implements OnInit {
    @Input() message: Message;
    @Input() comment: Comment;
    // username: string = localStorage.getItem('username');
    // username: string = localStorage.getItem('username');

    constructor(private messageService: MessageService) {
    // setTimeout(() => {
    //     this.messageService.getMessages();
    //     }, 2000);
        }


    ngOnInit() {
        

    }
}
