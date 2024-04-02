import { Component, OnInit } from '@angular/core';
import { User } from 'src/assets/classes/User';
import { UserService } from './users.service';

declare var $: any;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];
  public selectedUser: User = new User();
  public date = new Date();
  public searchText!: string;

  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
    setInterval(() => {
      this.date = new Date();
    })
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

  public edit(user: User) {
    this.selectedUser = user;
    $('#addEditUser').modal('show');
  }

  public close() {
    $('#addEditUser').modal('hide');
    this.selectedUser = new User();
  }

  public delete(user: User) {
    this.userService.deleteUser(user.id).subscribe((res: any) => {
      console.log('deleted : ', res);
    })
  }
}
