import { Component,Input, OnInit } from '@angular/core';

import { Posts } from 'src/assets/classes/posts';
import { User } from 'src/assets/classes/User';
import { UserService } from '../users.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input() public user!: User;
  @Input() public userId: number = 1;
  @Input() public posts: Posts[] = [];
  @Input() public postId: number = 1;
  @Input() public showCommetsSeperately = false;



 

  constructor( private userService: UserService) { 
   
  }


  ngOnInit(): void {
    this.getUser();
    this.getPosts() 
    
  }
  public getUser() {
    this.userService.getUser(this.userId).subscribe((res: User[]) => {
      this.user = res[0];
    })
  }
  public getPosts() {
    this.userService.getAllPosts(this.userId).subscribe((res: Posts[]) => {
      this.posts = res;
      if (!this.showCommetsSeperately) {
        this.posts.forEach(p => {
          this.getPostComments(p.id, p);
        });
      }
     
    })
  }

  public getPostComments(postId: number, post: Posts) {
    this.userService.getPostsComments(postId).subscribe((res: any) => {
      post.comments = res;
    });
  }



}
