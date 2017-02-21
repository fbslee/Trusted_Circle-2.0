import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Message } from './message.model';

import { MessageService } from '../services/message.service'

@Component({
  selector: 'app-message-input',
  template: `
  <h3>{{topicBody}} posted by {{topicUser}}</h3>
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
        <button type="button" class="btn btn-primary" (click)="onClear(f)">Clear</button>
        <button class="btn btn-default" type="submit">Post as Username</button>
    </form>
</div>
  `
})

export class MessageInputComponent {
    message: Message;
    topicBody: string = sessionStorage.getItem('topicBody')
    topicUser: string = sessionStorage.getItem('topicUser')
    constructor(private messageService: MessageService) {}

    onSubmit(form: NgForm) {
        if(this.message) {
            // Edit
            this.message.body = form.value.content;
            this.messageService.updateMessage(this.message)
            .subscribe(
                result => console.log(result)
            );
            this.message = null;
        } else {
            // Create
            const message = new Message(form.value.content, 'username');
            this.messageService.addMessage(message)
                .subscribe(
                    data => console.log(data),
                    error => console.error(error)
            );
        }
        form.resetForm();
    }

    onClear(form: NgForm) {
        this.message = null;
        form.resetForm();
    }

}