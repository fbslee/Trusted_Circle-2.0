import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule} from '@angular/router';
import { MaterialModule } from '@angular/material';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import 'hammerjs';
 
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { HeaderComponent } from './header/header.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './services/chat.service';
import { MessageComponent } from './messages/message.component';
import { MessageService } from './services/message.service';
import { MessageInputComponent } from './messages/message-input.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageListComponent } from './messages/message-list.component';

import { VotesComponent } from './votes/votes.component';
import { CirclesComponent } from './circles/circles.component';
import { CirclesService } from './services/circles.service';
import { TopicsComponent } from './topics/topics.component';
import { TopicsService } from './services/topics.service';
import { DataService } from './services/data.service';
import { VoteService } from './services/vote.service';
import { ResultService } from './services/result.service';
import { TrustedcounselorService } from './services/trustedcounselor.service';
import { ModalModule } from 'angular2-modal';

import { FooterComponent } from './footer/footer.component';
import { PollComponent } from './poll/poll.component';
import { PollService } from './services/poll.service';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';

import { Parallax, ParallaxConfig  } from './parallax.directive';
import { ResultsComponent } from './results/results.component';
import { PopoverModule } from 'ng2-popover';
import { PushNotificationComponent } from './notification.component';


import { DavidDataService } from './services/david-data.service';
import { TrustedcounselorComponent } from './trustedcounselor/trustedcounselor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ChatComponent,
    MessageComponent,
    MessageInputComponent,
    MessagesComponent,
    MessageListComponent,
    VotesComponent,
    CirclesComponent,
    TopicsComponent,
    FooterComponent,
    Parallax,
    PollComponent,
    ResultsComponent,
    TrustedcounselorComponent,
    PushNotificationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule,
    PopoverModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent
      },
      { path: 'home', component: HomeComponent
      },
      { path: 'chat', component: ChatComponent 
      , canActivate: [AuthGuard] 
      },
      { path: 'messages', component: MessagesComponent
      , canActivate: [AuthGuard] 
      },
      { path: 'votes', component: VotesComponent }, 
      { path: 'circles', component: CirclesComponent
      , canActivate: [AuthGuard] 
      }, 
      { path: 'topics', component: TopicsComponent },
      { path: 'poll', component: PollComponent },
      { path: 'results', component: ResultsComponent },
      { path: 'trustedcounselor', component: TrustedcounselorComponent }
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
    MessageService,
    PollService,
    DataService,
    DavidDataService,
    VoteService,
    ResultService,
    TrustedcounselorService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
