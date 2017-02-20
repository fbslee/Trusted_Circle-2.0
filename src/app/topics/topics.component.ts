import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../services/topics.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
  newTopic: any = {user: sessionStorage.getItem('username')};
  circle: string = sessionStorage.getItem('circle');
  topics: any = [];
  allCircles : any = [];
  // topics: any = [{user: 'Felipe', body: "Why don't we have president's day off?"}, {user: 'David', body: "Where is Glenn?"}, {user:'Richard',body: "Why does my room smell so bad?"}]
  // users: any = ['David', 'Richard', 'Gabe', 'Kan', 'Ricky']
  
  clicked(topic){
    sessionStorage.setItem('topicBody', topic.body)
    sessionStorage.setItem('topicUser', topic.user)
  }
  // createTopic(){
  //   if(this.topics.indexOf(this.newTopic) === -1){
  //     this.topics.push(this.newTopic)
  //   }
  //   this.newTopic = {user:sessionStorage.getItem('username'), body: null}
  // }

  constructor(private _TopicsService: TopicsService) { }

  ngOnInit() {
    // sessionStorage.removeItem('topic')
    this.getTopics();
  }

  topicClicked(topicName) {
    console.log('this is the topic!', topicName)
    sessionStorage.setItem('topicBody', topicName)
    sessionStorage.setItem('topicUser', "toBeFixed")
  }

  getTopics() {
    console.log('inside getTopics function inside CirclesComponent')
    //find the current circles's Id by name
    

    this._TopicsService.getCircles()
                      .subscribe( (data) => {
                        console.log("WHAT AM I???", data)
                        data.forEach((val)=>{
                          console.log(val);
                          this.allCircles.push(val)
                        }) 
                        console.log('list of allCircles', this.allCircles)
                        console.log('this is the current Circle', sessionStorage.getItem('circle') );

                        for(var props in this.allCircles) {
                          for(var prop in this.allCircles[props]) {
                            if (this.allCircles[props][prop] === sessionStorage.getItem('circle')) {
                              var topicIdFound = this.allCircles[props]["id"];
                              console.log('this is the id:', this.allCircles[props]["id"])
                            }
                          }
                        }

                                this._TopicsService.getTopics()
                                .subscribe( (data) => {
                                  console.log("WHAT AM I???", data)
                                  data.forEach((val)=>{
                                    console.log(val);
                                    if(val.circleId === topicIdFound) {
                                    this.topics.push(val.body)
                                    }
                                  }) 
                                  console.log('list of topics', this.topics)
                                  }
                                )//end getTopics function



                        }
                      )//end getCircles

    console.log('ALL CIRCLES', this.allCircles)


  }//end getTopics  

}
