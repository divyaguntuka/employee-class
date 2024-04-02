import { Component, Input, OnInit } from '@angular/core';

import { Comments, Posts } from 'src/assets/classes/posts';
import { User } from 'src/assets/classes/User';
import { UserService } from '../users.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  public user!: User;
  public userId: number = 1;
  public post!: Posts;
  public postId: number = 1;
  public comments: Comments[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe((path: any) => {
      if (path?.userId) {
        this.userId = path.userId;
      }
    })
    this.route.params.subscribe((path: any) => {
      if (path?.postId) {
        this.postId = path.postId;
      }
    })
  }


  ngOnInit(): void {
    this.getUser();
    this.getPost()

  }
  public getUser() {
    this.userService.getUser(this.userId).subscribe((res: User[]) => {
      this.user = res[0];
    })
  }
  public getPost() {
    this.userService.getPost(this.postId).subscribe((res: Posts) => {
      this.post = res;
      this.getPostComments(this.postId);
    })
  }

  public getPostComments(postId: number) {
    this.userService.getPostsComments(postId).subscribe((res: any) => {
      this.comments = res;
    });
  }



}
