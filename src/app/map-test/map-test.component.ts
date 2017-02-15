import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-test',
  templateUrl: './map-test.component.html',
  styleUrls: ['./map-test.component.scss']
})
export class MapTestComponent implements OnInit {

    title: string = 'My first angular2-google-maps project';
    lat: number = 51.678418;
    lng: number = 7.809007;



  constructor() { }

  ngOnInit() {
  
  

  }


  getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition)
  }

  showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;

    var img_url = "https://maps.googleapis.com/maps/api/staticmap?center="
    +latlon+"&zoom=14&size=400x300&sensor=false&key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU";
    
    document.getElementById("mapholder").innerHTML = "<img src='"+img_url+"'>";
  }



}
