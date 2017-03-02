export class Message {
   body: string;
   username: string;
   votes: any;
   userId?: any;
   topicId?: any;
   messageId?: any;
   comments?: any;
   messageComments?: any;

   constructor(body: string, username: string, votes: any, userId?: any, topicId?: any, messageId?: any, comments?: any, messageComments?: any) {
       this.body = body;
       this.username = username;
       this.votes = votes;
       
       this.userId = userId;
       this.topicId = topicId;
       this.messageId = messageId;
       this.comments = comments;
       this.messageComments = messageComments;
   }
}