export class Message {
   body: string;
   username: string;
   messageId?: string;
   userId?: string;

   constructor(body: string, username: string, messageId?: string, userId?: string) {
       this.body = body;
       this.username = username;
       this.messageId = messageId;
       this.userId = userId;
   }
}