import { Component,Input, OnInit } from '@angular/core';

import { Posts } from 'src/assets/classes/posts';
import { User } from 'src/assets/classes/User';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() public user! : User;
  @Input() public userId: number = 1;
  @Input() public posts: Posts[] = [];
  @Input() public comment! : Comment;
  

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
