import { Component, OnInit } from '@angular/core';
import { CirclesComponent } from '../circles/circles.component';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  newTopic: string;
  circle: string = 'Hack Reactor';
  topics: any = ["Why don't we have president's day off?", "Where is Glenn?", "Why does my room smell so bad?"]
  clicked(topic){
    console.log(topic)
  }
  createTopic(){
    if(this.topics.indexOf(this.newTopic) === -1){
      this.topics.push(this.newTopic)
    }
    this.newTopic = null
  }
  constructor() { }

  ngOnInit() {
    console.log('what is circles component', typeof(CirclesComponent))
  }

}
