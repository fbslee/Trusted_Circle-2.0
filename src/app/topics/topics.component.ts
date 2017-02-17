import { Component, OnInit } from '@angular/core';
import { CirclesComponent } from '../circles/circles.component';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  newTopic: any = {user: sessionStorage.getItem('username')};
  circle: string = sessionStorage.getItem('circle');
  topics: any = [{user: 'Felipe', body: "Why don't we have president's day off?"}, {user: 'David', body: "Where is Glenn?"}, {user:'Richard',body: "Why does my room smell so bad?"}]
  users: any = ['David', 'Richard', 'Gabe', 'Kan', 'Ricky']
  
  clicked(topic){
    sessionStorage.setItem('topicBody', topic.body)
    sessionStorage.setItem('topicUser', topic.user)
  }
  createTopic(){
    if(this.topics.indexOf(this.newTopic) === -1){
      this.topics.push(this.newTopic)
    }
    this.newTopic = {user:sessionStorage.getItem('username'), body: null}
  }
  constructor() { }

  ngOnInit() {
    sessionStorage.removeItem('topic')
  }

}
