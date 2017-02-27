import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from './message.model';


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
        username: ''
    };

    @Output('vote') change = new EventEmitter();


    constructor(private messageService: MessageService) {}

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
        if (this.myVote == 1) {
            return;
        }

        this.myVote++;
        this.emitEvent();
    }

    downVote() {
        if (this.myVote == -1) {
            return;
        }

        this.myVote--;
        this.emitEvent();
    }

    emitEvent() {
        this.change.emit({myVote: this.myVote});
    }
}
