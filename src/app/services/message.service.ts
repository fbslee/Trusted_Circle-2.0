import { Http, Response, Headers, JsonpModule } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

import { Message } from '../messages/message.model';
import { Comment } from "../messages/comment.model"

@Injectable()

export class MessageService {

    constructor(private http: Http) {}

    private messages: Message[] = [];
    private comments: Comment[] = [];

    username: string = localStorage.getItem('username');
    userId: any = localStorage.getItem('userID');
    topicId: any = sessionStorage.getItem('topicSelectedIdx');



    messageIsEdit = new EventEmitter<Message>();

    findUser(username): Observable<any> {

    return this.http.get('/api/users/'+username)
             .map( ( res:Response ) => res.json() )
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'))
    }

    addMessage(message: Message) {
        let un = message.username;
        let body = JSON.stringify(message);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/api/messages', body, {headers: headers})
            .map((response: Response) => {
                let result = response.json();
                let message = new Message(
                    result.body, 
                    un, 
                    result.votes,
                    this.userId,
                    result.topicId,
                    result.id
                    );
                this.messages.push(message);
                return message;
            })
            .catch((error: Response) => Observable.throw(error.json() || 'Server error'));

    }

     getMessages() {
        let idx = sessionStorage.getItem('topicSelectedIdx');
        return this.http.get('/api/getMessagesAndVotes/'+idx)
            .map((response: Response) => {
                let messages = response.json();
                let transformedMessages: Message[] = [];
                for (let message of messages) {
                        var body = message.body;
                        var user =  message.user.username;
                        // var votes = message.votes;
                        var userId = message.userId;
                        var topicId = message.topicId;
                        var id = message.id;
                        var votes = message.voteCount;
                        console.log(votes);
                        // console.log(voteCount)

                    transformedMessages.push(new Message(
                        body, 
                        user, 
                        votes, 
                        userId,
                        topicId,
                        id,
                        ));
                }
                this.messages = transformedMessages;
                console.log('transformedMessages ', transformedMessages);
                return transformedMessages;
            })
            .catch((error: Response) => Observable.throw(error.json() || 'Server error'));
    }
    editMessage(message: Message){
        this.messageIsEdit.emit(message);

    }

    upVoteMessage(message: Message) {
        let body = JSON.stringify(message);
        console.log('getting in the message service for vote', body);
        let headers = new Headers({'Content-Type': 'application/json'});

        return this.http.get('/api/messagesvotes/' + message.messageId + '/' + localStorage.getItem('userID') )

    }
    downVoteMessage(message: Message) {
        let body = JSON.stringify(message);
        console.log('getting in the message service for vote', body);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.delete('/api/messagesvotes/' + message.messageId +'/'+ message.userId)    
    }

    updateMessage(message: Message) {
        let body = JSON.stringify(message);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.patch('/api/messages/' + message.messageId, body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json() || 'Server error'));
    }


    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);
       
        return this.http.delete('/api/messages/' + message.messageId)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json() || 'Server error'));
            
    }
    addComment (sendThis) {
        console.log('in service', sendThis);
        let headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('/api/comment', sendThis, {headers: headers})
        .map((data) => {
                    console.log('mapped!')
                }).subscribe( (result) => {
                    console.log(result,'adbaaadbd');
                })    

    }

    getComments(message: Message) {
   
        return this.http.get('/api/comments/'+ message.messageId)
            .map((response: Response) => {
                let comments = response.json();
                console.log('comments ===========', comments);
                let transformedComments: Comment[] = [];
                for (let comment of comments) {
                    console.log("inside loop", comment);
                        var text = comment.text;
                        var username =  comment.username;
                        // var votes = message.votes;
                        var date = comment.date;
                        // var likes = comment.likes;
                        var userId = comment.userId;
                        var messageId = comment.messageId;
                        var commentId = comment.id;
                        // var votes = comment.voteCount;
                        // console.log(votes);
                        // console.log(voteCount)

                    transformedComments.push(new Comment(
                        text, 
                        username, 
                        date, 
                        userId,
                        messageId,
                        commentId,
                        ));
                }
                this.comments = transformedComments;
                console.log('transfromed COMMMENTSSSSSSS ', transformedComments);
                return transformedComments;
            })
    }
}