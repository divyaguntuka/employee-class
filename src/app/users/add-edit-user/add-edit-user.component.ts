import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../users.service';
import { User } from 'src/assets/classes/User';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent implements OnInit {

  @Input() public user: User = new User();
  @Output() public userEmitter = new EventEmitter();
  @Output() public closeEmitter = new EventEmitter();

  constructor(private userService: UserService) { }


  ngOnInit(): void {
  }

  public saveUser() {
    console.log(this.user);
    this.userEmitter.emit(this.user);
  
  }

  public close() {
    this.closeEmitter.emit({});
  }
}
