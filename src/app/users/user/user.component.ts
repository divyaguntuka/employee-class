import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address, User } from 'src/assets/classes/User';
import { ROUTES } from 'src/assets/enums/routes';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() public user!: User;
  @Input() public showPostsBtn = true;
  @Input() public address= Address;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public viewPosts(id: number) {
    // users/userId/posts e.g users/1/posts
    this.router.navigateByUrl(ROUTES.USERS + '/' + id + ROUTES.POSTS)
  }

}
