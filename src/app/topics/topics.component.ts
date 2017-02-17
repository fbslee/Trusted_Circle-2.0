import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  circle: string = 'Hack Reactor';
  topics: any = ["Why don't we have president's day off?", "Where is Glenn?", "Why does my room smell so bad?"]
  clicked(topic){
    console.log(topic)
  }
  constructor() { }

  ngOnInit() {
  }

}
