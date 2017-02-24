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

    @Output('vote') change = new EventEmitter();


    constructor(private messageService: MessageService) {}

    onEdit() {    

        this.messageService.editMessage(this.message)
      
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
