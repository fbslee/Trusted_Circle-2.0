export class Message {
   body: string;
   username: string;
   messageId?: string;
   userId?: any;

   constructor(body: string, username: string, messageId?: string, userId?: any) {
       this.body = body;
       this.username = username;
       this.messageId = messageId;
       this.userId = userId;
   }
}