import { Component, OnInit } from '@angular/core';
import { User } from 'src/assets/classes/User';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers() {
    this.userService.getAllUsers().subscribe((res: User[]) => {
      this.users = res;
    });
  }

}
