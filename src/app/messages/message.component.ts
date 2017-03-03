import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";

import { Message } from './message.model';
import { Comment } from './comment.model';

import { Observable } from 'rxjs/Observable';
import { Http, JsonpModule, Response, Headers } from '@angular/http';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { DialogRef } from 'angular2-modal';


import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
    @Input() message: Message;
    comments: Comment[];
    @Input() voteCount = 0;
    @Input() myVote = 0;
    private userInfo = {
        username: '',
        disp: '',
        firstname: '',
        lastname: ''
    };
      


    @Output('vote') change = new EventEmitter();


    constructor(private messageService: MessageService,
                private http: Http,
                public modal: Modal
                ) {}

    ngOnInit() {
        console.log('myVote', this.myVote)
        this.messageService.getComments(this.message)
        .subscribe( (data) => {
           console.log('this is COMMENTSSSS data inside Comments', data);
           this.comments = data;
           });
    }

    onEdit() {
        this.messageService.editMessage(this.message)
    }
    openModal() {
        let comment = this.modal.prompt()
            .size('lg')
            .isBlocking(false)
            .showClose(false)
            .keyboard(27)
            .dialogClass('dialog')
            .headerClass('comment')
            .body('Post A Comment')
            .bodyClass('modal-body')
            .okBtn('Post')
            .open();
            
            comment
            .then((d) => {
                console.log(d);
                return d.result
            })
            .then((r) => { 
                var userId = localStorage.getItem('userID');
                var username = localStorage.getItem('username');
                var messageId = this.message.messageId;
                var text = r;
                var sendThis = {
                    "text": text,
                    "username": username,
                    "date": 'Just Now',
                    "userId": userId,
                    "messageId": messageId,
                    "commentId": 0,
                };
                this.comments.push(sendThis)

                if(text) {
                this.messageService.addComment(sendThis)
                .subscribe(
                   data => console.log("succss here is the data ", data),
                   error => console.error("error here is the error ", error)
                )   
                
                }
            });   
                   
  }

    ttp(user) {

        if(this.userInfo.username === user) {
            return;
        }
        else {

        this.messageService.findUser(user)
        .subscribe( (data) => {
                        this.userInfo = data[0];
                        this.userInfo.disp = this.userInfo.lastname + ', ' + this.userInfo.firstname;
                        console.log(this.userInfo, 'this is data and its subscribed');
                        }) 
        }
    }

    onDelete() {
        this.messageService.deleteMessage(this.message)
        .subscribe(
            result => console.log(result)
        );
    }

    upVote(): Observable<any> {
        console.log(this.message);
        if (this.myVote == 1) {
            return;
        }
        this.messageService.upVoteMessage(this.message).map( (res:Response) => {
            return res.json();
        }).subscribe( (data) => {
            let body = this.message;
            let headers = new Headers({'Content-Type': 'application/json'});
            if(data.length === 0) { //then create the post
                this.myVote++;
                this.http.post('/api/messagesvotes/', body,  {headers: headers}).map((data) => {
                }).subscribe( (result) => {
                })    
            } else {
            return alert('You Already Voted!!!')
            }
        })
        // .subscribe(
        //     result => console.log(result));
    }

    downVote() {
        if (this.myVote == -1) {
            return;
        }
        this.myVote--;
        this.messageService.downVoteMessage(this.message)
        .subscribe(
            result => console.log(result));
    }

    emitEvent() {
        this.change.emit({myVote: this.myVote});
    }
    belongsToUser() {
        return localStorage.getItem('userId') == this.message.userId;
    }
    
}
