import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Message } from '../message/message.model';


@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
