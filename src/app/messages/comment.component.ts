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

    constructor(private messageService: MessageService) {}
    ngOnInit() {}
}
