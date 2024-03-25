import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/assets/services/common.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    // let c = new CommonService();
    // console.log('user component : ', c.result);
    console.log('user component ref : ', this.commonService.result);
  }

}
