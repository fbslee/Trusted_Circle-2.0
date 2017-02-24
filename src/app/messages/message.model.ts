export class Message {
   body: string;
   username: string;
   votes: any;
   messageId?: any;
   userId?: any;

   constructor(body: string, username: string, votes: any, messageId?: any, userId?: any) {
       this.body = body;
       this.username = username;
       this.votes = votes;
       this.messageId = messageId;
       this.userId = userId;
   }
}