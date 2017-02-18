import { Component, OnInit, Directive } from '@angular/core';
import { Ng2ParallaxScrollModule } from 'ng2-parallax-scroll';
import { Parallax, ParallaxConfig  } from './parallax.directive';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

@Directive({
  
})
export class HomeComponent implements OnInit {
 parallaxConfig: ParallaxConfig = {
    };

  constructor() { }

  ngOnInit() {
  }

}
