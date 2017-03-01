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
  noCounselors: boolean = false

  constructor(private _TrustedcounselorService: TrustedcounselorService) { }

  invite(){
    this.showThis = false;
    this._TrustedcounselorService.invite(this.circle)
    .subscribe(data => {
      if(data === null){
        this.invited = true;
      } else if(data.noCounselors === true){
        this.noCounselors = true;
      }
    })
  }
  ngOnInit() {
  }

}
