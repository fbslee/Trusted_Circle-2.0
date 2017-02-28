import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';
import { Http, Headers } from '@angular/http';

import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent {
    @Input() message: Message;
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
                private http: Http) {}

    ngOnInit() {
        console.log('myVote', this.myVote)
    }



    onEdit() {    

        this.messageService.editMessage(this.message)
      
    }

    ttp(user) {

        if(this.userInfo.username === user) {
            return;
        }
        else {

        this.messageService.findUser(user)
        .subscribe( (data) => {
                        this.userInfo = data[0];
                        this.userInfo.disp = this.userInfo.username + '<flex class="flex"> </flex>' + this.userInfo.firstname +','+ this.userInfo.lastname;
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

    upVote() {
        // console.log(this.message);
        if (this.myVote == 1) {
            return;
        }
        let body = JSON.stringify(this.message);
        let headers = new Headers({'Content-Type': 'application/json'});

        
        this.messageService.upVoteMessage(this.message).subscribe( (result) => {
            // console.log(result);
            if(result.length > 0) {
                alert('You already Voted!!!!')
            } else {
                // console.log('got inside NOT!!!  true!')
                this.myVote++;
            return this.http.post('/api/messagesvotes/' + this.message.messageId, body, {headers: headers}) 
            }




        })


        // })
        // console.log(bool, 'BOOL!!!!!!!!!!!!!!!!!!!!')
        // if(bool) {
        //     alert('You Already Voted!!!!') 
        // } else {
        //     this.myVote++;
        // }



        
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
}
