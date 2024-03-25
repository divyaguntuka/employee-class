import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/assets/services/common.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.commonService.add(3, 4);
    console.log('team component : ', this.commonService.result);
    this.getPosts();
  }

  public getPosts() {
    this.commonService.getAllPosts().subscribe((res: any) => {
      console.log(res);
    })
  }

}
