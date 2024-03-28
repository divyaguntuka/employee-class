import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/assets/classes/posts';
import { UserService } from '../users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/assets/classes/User';
import { ROUTES } from 'src/assets/enums/routes';

declare var $: any;


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public user!: User;
  public userId: number = 1;
  public posts: Posts[] = [];
  public postId: number = 1;
  public showCommetsSeperately = true;
  public selectedPost: Posts = new Posts();


  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) {
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


  public viewComments(id: number) {
    this.router.navigateByUrl(ROUTES.USERS + '/' + this.userId + ROUTES.POSTS + '/' + this.postId + ROUTES.COMMENTS)
  }

  public saveOrEditPost(post: Posts) {
    if (this.selectedPost.id) {
      this.userService.updatePost(this.selectedPost.id, post).subscribe((res: any) => {
        console.log('updated post : ', res);
        this.close();
      })
    } else {
      this.userService.savePost(post).subscribe((res: any) => {
        console.log('save post : ', res);
        this.close();
      })
    }
  }

  public edit(post: Posts) {
    $('#addEditPost').modal('show');
    this.selectedPost = post;
  }

  public delete(post: Posts) {
    this.userService.deletePost(post.id).subscribe((res: any) => {
      console.log('deleted : ', res);
    })
  }

  public close() {
    $('#addEditPost').modal('hide');
    this.selectedPost = new Posts();
  }

}
