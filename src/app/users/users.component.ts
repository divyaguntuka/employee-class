import { Component, OnInit } from '@angular/core';
import { User } from 'src/assets/classes/User';
import { UserService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
edit(_t10: User) {
throw new Error('Method not implemented.');
}

  public users: User[] = [];
  selectedUser: any;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    this.close();
  }

  public getUsers() {
    this.userService.getAllUsers().subscribe((res: User[]) => {
      this.users = res;
    });
  }

    public saveOrEditUser(user: User) {
    if (this.selectedUser.id) {
      this.userService.updateUser(this.selectedUser.id, user).subscribe((res: any) => {
        console.log('updated post : ', res);
        this.close();
      })
    } else {
      this.userService.saveUser(user).subscribe((res: any) => {
        console.log('save post : ', res);
        this.close();
      })
    }
  }
  close() {
    throw new Error('Method not implemented.');
  }



}
