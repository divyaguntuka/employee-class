import { Component, Input, OnInit } from '@angular/core';
import { Comments } from 'src/assets/classes/posts';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

@Input() public comment! : Comments;

  constructor() { }

  ngOnInit(): void {
  }

}
