import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Message } from './message.model';

import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-message-input',
  template: `
  <h3>{{topic}}</h3>
  <div class="col-md-8 col-md-offset-2">
    <form (ngSubmit)="onSubmit(f)" #f="ngForm">
        <div class="form-group">
            <label for="content">Content</label>
            <input
                    type="text"
                    id="content"
                    class="form-control"
                    [ngModel]="message?.content"
                    name="content"
                    required>
        </div>
        <button type="button" class="btn btn-danger" (click)="onClear(f)">Clear</button>
        <button class="btn btn-primary" type="submit">Post as Username</button>
                <button class="btn btn-default" type="submit">Post as Anonymous</button>

    </form>
</div>
  `
})

export class MessageInputComponent {
    message: Message;
    topic: string = sessionStorage.getItem('topic')
    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {
        const message = new Message(form.value.content, sessionStorage.getItem('username'));
        this.messageService.addMessage(message);
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }


}