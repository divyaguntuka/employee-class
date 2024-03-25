import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posts } from 'src/assets/classes/posts';
import { CommonService } from 'src/assets/services/common.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public posts: Posts[] = [];
  public userId!: number;

  constructor(private route: ActivatedRoute, private cs: CommonService) {
    this.route.params.subscribe((path: any) => {
      if (path?.userId) {
        this.userId = path.userId;
      }
    })
  }

  ngOnInit(): void {
    this.getAllPosts();
  }

  public getAllPosts() {
    this.cs.getAllPosts(this.userId).subscribe((res: Posts[]) => {
      console.log(res);
      this.posts = res;
    })
  }

}
