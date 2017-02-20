import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import 'underscore';
 
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

import { SignupComponent } from './signup/signup.component';
import { SignupService } from './signup/signup.service';
import { LoginService } from './login/login.service';
import { VotesComponent } from './votes/votes.component';
import { CirclesComponent } from './circles/circles.component';
import { CirclesService } from './services/circles.service';
import { TopicsComponent } from './topics/topics.component';
import { TopicsService } from './services/topics.service';
import { ModalService } from './services/modal.service';

import { FooterComponent } from './footer/footer.component';
import { PollComponent } from './poll/poll.component';

import { Parallax, ParallaxConfig  } from './parallax.directive';
import { NgSemanticModule } from "ng-semantic";

import { ModalComponent } from './modal/modal.component';



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
    VotesComponent,
    CirclesComponent,
    TopicsComponent,
    FooterComponent,
    Parallax,
    PollComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgSemanticModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent
        // ,canActivate: [AuthGuard]
      },
      { path: 'home', component: HomeComponent
      // ,canActivate: [AuthGuard] 
      },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'chat', component: ChatComponent 
      // , canActivate: [AuthGuard] 
      },
      { path: 'messages', component: MessagesComponent
      // , canActivate: [AuthGuard] 
      },
      { path: 'votes', component: VotesComponent }, 
      { path: 'circles', component: CirclesComponent
      // , canActivate: [AuthGuard] 
      }, 
      { path: 'topics', component: TopicsComponent },
      { path: 'poll', component: PollComponent }
    ]),
    MaterialModule.forRoot()
  ],
  providers: [
    TopicsService,
    ChatService,
    CirclesService,
    AuthGuard,
    AuthService,
    SignupService,
    LoginService,
    ModalService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
