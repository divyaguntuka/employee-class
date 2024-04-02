import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Address, User } from 'src/assets/classes/User';
import { ROUTES } from 'src/assets/enums/routes';
import { UserService } from '../users.service';

declare var $: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() public user!: User;
  @Input() public showPostsBtn = true;
  @Input() public address = Address;
  @Output() public editEmit = new EventEmitter<any>();
  @Output() public deleteEmit = new EventEmitter<any>();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  public viewPosts(id: number) {
    // users/userId/posts e.g users/1/posts
    this.router.navigateByUrl(ROUTES.USERS + '/' + id + ROUTES.POSTS)
  }

  public edit(user: User) {
    this.editEmit.emit(user);
  }

  delete(user: User) {
    this.deleteEmit.emit(user);
  }

}
