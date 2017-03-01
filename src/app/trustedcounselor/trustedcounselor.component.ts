import { Component, OnInit } from '@angular/core';
import { TrustedcounselorService } from '../services/trustedcounselor.service';

@Component({
  selector: 'app-trustedcounselor',
  templateUrl: './trustedcounselor.component.html',
  styleUrls: ['./trustedcounselor.component.scss']
})
export class TrustedcounselorComponent implements OnInit {

  circle: string = localStorage.getItem('currentCircle')
  suggestor: string = localStorage.getItem('username')
  showThis: boolean = true
  invited: boolean = false

  constructor(private _TrustedcounselorService: TrustedcounselorService) { }

  invite(){
    this._TrustedcounselorService.invite(this.circle)
    .subscribe(data => {
      console.log(data)
    })
    this.showThis = false;
    this.invited = true;
  }
  ngOnInit() {
  }

}
