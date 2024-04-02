import { Component, Input, OnInit } from '@angular/core';
import { Posts } from 'src/assets/classes/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() public post!: Posts;
  constructor() { }

  ngOnInit(): void {
  }

}
