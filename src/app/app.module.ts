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
import { MessageComponent } from './messages/message.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageListComponent } from './messages/message-list.component';
import { MapTestComponent } from './map-test/map-test.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { LoginService } from './login/login.service';
import { VotesComponent } from './votes/votes.component';
import { Ng2ParallaxScrollModule } from '../../node_modules/ng2-parallax-scroll/dist';
import { CirclesComponent } from './circles/circles.component';
import { TopicsComponent } from './topics/topics.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HeaderComponent,
    ChatComponent,
    MessageComponent,
    SignupComponent,
    MessageInputComponent,
    MessagesComponent,
    MessageListComponent,
    MapTestComponent,
    VotesComponent,
    CirclesComponent,
    TopicsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent
        ,canActivate: [AuthGuard]
      },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'votes', component: VotesComponent }, 
      { path: 'circles', component: CirclesComponent }, 
      { path: 'topics', component: TopicsComponent }
    ]),
    MaterialModule.forRoot(),
        AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC4K9y-gZajK78CG6JFg2jfan2XtcDPY6w'
    })
  ],
  providers: [
    ChatService,
    AuthGuard,
    AuthService,
    SignupService,
    LoginService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
