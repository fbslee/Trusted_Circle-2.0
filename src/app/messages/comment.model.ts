export class Comment {
   text: any;
   username: string;
   date: any;
   userId?: any;
   messageId?: any;
   commentId?: any;

   constructor(text: any, username: string, date: any, userId?: any, messageId?: any, commentId?: any) {
       this.text = text;
       this.username = username;
       this.date = date;
       this.userId = userId;
       this.messageId = messageId;
       this.commentId = commentId;
   }
}