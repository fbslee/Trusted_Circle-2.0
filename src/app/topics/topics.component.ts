import { Component, OnInit } from '@angular/core';
import { CirclesComponent } from '../circles/circles.component';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  username: any = sessionStorage.getItem('username');
  newTopic: string;
  circle: string = sessionStorage.getItem('circle');
  topics: any = ["Why don't we have president's day off?", "Where is Glenn?", "Why does my room smell so bad?"]
  clicked(topic){
    sessionStorage.setItem('topic',topic)
  }
  createTopic(){
    if(this.topics.indexOf(this.newTopic) === -1){
      this.topics.push(this.newTopic)
    }
    this.newTopic = null
  }
  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem('topic')
  }

}
