import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Message } from '../message/message.model';

import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})

export class MessageInputComponent {
    message: Message;

    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {
        const message = new Message(form.value.content, 'Max');
        this.messageService.addMessage(message);
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }


}