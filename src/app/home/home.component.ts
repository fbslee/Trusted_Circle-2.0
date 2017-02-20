import { Component, OnInit, Directive,  } from '@angular/core';
import { Parallax, ParallaxConfig  } from '../parallax.directive';
import { NgSemanticModule } from "ng-semantic";

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

@Directive({
  
})
export class HomeComponent implements OnInit {


  ngOnInit() {

  }

}
