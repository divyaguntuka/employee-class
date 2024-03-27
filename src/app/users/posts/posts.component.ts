import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/assets/classes/posts';
import { UserService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/assets/classes/User';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public user!: User;
  public userId: number = 1;
  public posts: Posts[] = [];
  public showCommetsSeperately = true;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe((path: any) => {
      if (path?.userId) {
        this.userId = path.userId;
      }
    })
  }

  ngOnInit(): void {
    this.getUser();
    this.getPosts();
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
