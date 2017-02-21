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
  userInfo: {};
  filteredItems: {};

  topicId: any;
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
    this.getUsers();
  }

  topicClicked(topicName) {
    console.log('this is the topic!', topicName)
    //GET TOPICS_USERS
    this._TopicsService.getUsersTopics()
                      .subscribe( (data1) => {
                        console.log("Where is this data man", data1)
                                //GET TOPICS
                                this._TopicsService.getTopics()
                                .subscribe( (data) => {
                                  console.log("WHAT AM I???", data)
                                  data.forEach((val)=>{
                                    console.log(val, 'adbdababdababdadab');
                                    if(val.body === topicName){
                                    this.topicId = val.id; 
                                    console.log(data1, 'data from the getUSERTOPICS');
                                    console.log(this.topicId,'THIS IS TOPIC ID!');
                                    
                                        //GET USERS
                                        this._TopicsService.getUsers()
                                        .subscribe( (data3) => {
                                          console.log("Where is this data man of GET USERS", data3)
                                          for(var prop1 of data1) {
                                            if(prop1.status === "original poster" && this.topicId === prop1.topicId) {
                                              for(var prop3 of data3) {
                                                console.log('proP333333', prop3)
                                                if(prop3.id === prop1.userId) {
                                                  console.log(prop3, prop1);
                                                  sessionStorage.setItem('topicOwner', prop3.username);
                                                  sessionStorage.setItem('topicUser', prop3.username);
                                                  
                                                }
                                              }
                                            

                                              console.log( sessionStorage.getItem('topicOwner') );
                                            } 
                                          }



                                        })

  
                                    }
                                  }) 
                                  }
                                )//end getTopics function

                      })


    sessionStorage.setItem('topicBody', topicName)
    sessionStorage.setItem('topicUser', sessionStorage.getItem('topicOwner'));
  }

  filterItem(value){
   if(!value) this.filteredItems = Object.assign([], this.userInfo); //when nothing has typed
   this.filteredItems = Object.assign([], this.userInfo).filter(
      item => item.username.toLowerCase().indexOf(value.toLowerCase()) > -1
   )
  }

  printuser(user) {
    console.log(user)
    sessionStorage.setItem('suggestedUsername', user.username)
    sessionStorage.setItem('suggestedUserId', user.id)
  }

  getUsers() {
    this._TopicsService.getUsers()
                      .subscribe( (data) => {
                        console.log("Where is this data man", data)
                        this.userInfo = data;
                        this.filterItem('');
                        console.log('yo wtf', this.userInfo)
                        console.log('goddamnit', this.filteredItems)
                      })
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
