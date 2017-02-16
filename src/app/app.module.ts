import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './services/chat.service';
import { MessageComponent } from './message/message.component';
import { MapTestComponent } from './map-test/map-test.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { MessageInputComponent } from './message-input/message-input.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageListComponent } from './message-list/message-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ChatComponent,
    MessageComponent,
    MapTestComponent
    MessageInputComponent,
    MessagesComponent,
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent 
      // canActivate: [AuthGuard] 
      },
      { path: 'login', component: LoginComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'messages', component: MessagesComponent },

    ]),
    MaterialModule.forRoot(),
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4K9y-gZajK78CG6JFg2jfan2XtcDPY6w'
    })
  ],
  providers: [
    ChatService,
    AuthGuard,
    AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
