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
    @Output() editClicked = new EventEmitter<string>();
    @Input() voteCount = 0;
    @Input() myVote = 0;

    @Output('vote') change = new EventEmitter();


    constructor(private messageService: MessageService) {}

    onEdit() {
        this.editClicked.emit('A new value');
    }

    onDelete() {
        this.messageService.deleteMessage(this.message);
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
