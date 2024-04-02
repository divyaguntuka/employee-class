import { Component, Input, OnInit } from '@angular/core';
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
delete(arg0: User) {
throw new Error('Method not implemented.');
}

  @Input() public user!: User;
  @Input() public showPostsBtn = true;
  @Input() public address= Address;
  selectedUser: User = new User();

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  public viewPosts(id: number) {
    // users/userId/posts e.g users/1/posts
    this.router.navigateByUrl(ROUTES.USERS + '/' + id + ROUTES.POSTS)
  }

  public edit(user: User) {
    $('#addEditUser').modal('show');
    this.selectedUser = user;
  }

  // public delete(user: User) {
  //   this.userService.deleteUser(user.id).subscribe((res: any) => {
  //     console.log('deleted : ', res);
  //   })
  // }

  public close() {
    $('#addEditUser').modal('hide');
    this.selectedUser = new User();
  }


}
