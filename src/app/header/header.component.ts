import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';
import { DataService } from '../services/data.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import { DavidDataService } from '../services/david-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private status = localStorage.getItem('username') || false;
  private n = 1;
  private userInfo = {
    photo: ''
  }

  constructor(overlay: Overlay, 
  vcRef: ViewContainerRef, 
  public modal: Modal,
  private sanitizer: DomSanitizer,
  private DavidDataService: DavidDataService) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() {
    this.sanitizer.bypassSecurityTrustHtml;
    // console.log(localStorage.getItem('username')) {
    //   this.status=true;
    // }
    this.userInfo.photo = localStorage.getItem('photo');
    this.getAllUsers();
    this.getAllTopics();
    this.getAllUsersTopics();
    this.getAllCircles();
    this.getAllUsersCircles();
    // this.getAllCurrentUserData();
  }

  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.status = null;
  }

  flag() {
    this.status = 'true';
  }

  openModal() {
    this.modal.alert()
        .size('lg')
        .showClose(true)
        .title('Welcome, ' + localStorage.getItem('username'))
        .body(`
            <img src="http://santetotal.com/wp-content/uploads/2014/05/default-user.png" style="width:20%;" class="profile-photo">
            <h4>Alert is a classic (title/body/footer) 1 button modal window that 
            does not block.</h4>
            <b>Configuration:</b>
            <ul>
                <li>Non blocking (click anywhere outside to dismiss)</li>
                <li>Size large</li>
                <li>Dismissed with default keyboard key (ESC)</li>
                <li>Close wth button click</li>
                <li>HTML content</li>
            </ul>`)
        .open();
  }



  getAllUsers() {
    this.DavidDataService.getUsers()
                      .subscribe( (data) => {
                        //console.log("Where is this data man", data)
                        this.DavidDataService.allUsers = data;
                        console.log(this.DavidDataService.allUsers, 'who are the users?');
                      })
  }

  getAllTopics() {
    this.DavidDataService.getTopics()
                      .subscribe( (data) => {
                        //console.log("Where is this data man", data)
                        this.DavidDataService.allTopics = data;
                        console.log(this.DavidDataService.allTopics, 'what are the topics');
                      })
  }

  getAllUsersTopics() {
    this.DavidDataService.getUsersTopics()
                      .subscribe( (data) => {
                        //console.log("Where is this data man", data)
                        this.DavidDataService.allUserTopics = data;
                        console.log(this.DavidDataService.allUserTopics, 'what are the User-Topics');
                      })
  }
  
  getAllUsersCircles() {
    this.DavidDataService.getUsersCircles()
                      .subscribe( (data) => {
                        //console.log("Where is this data man", data)
                        this.DavidDataService.allUserCircles = data;
                        console.log(this.DavidDataService.allUserCircles, 'what are the User-Topics');
                      })
  }

  getAllCircles() {
    this.DavidDataService.getCircles()
                      .subscribe( (data) => {
                        //console.log("Where is this data man", data)
                        this.DavidDataService.allCircles = data;
                        console.log(this.DavidDataService.allCircles, 'what are the circles?');
                      })
  }

}