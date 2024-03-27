import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/assets/classes/address';
import { UserService } from '../users.service';



@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  
  // @Input() public address!: Address;
  // public userId: number = 1;
  // @Input() public add: Address[] = [];

  constructor(private router: Router, private userService: UserService) {  }

  ngOnInit(): void {
    // this.getUser();
    
  }
  // public getUsers() {
  //   this.userService.getAllUsers().subscribe((res: Address[]) => {
  //     console.log()
  //     this.add = res;
  //   });
  // }
  // public getUser() {
  //   this.userService.getUser(this.userId).subscribe((res: Address[]) => {
  //     this.address= res[0];
  //   })
  // }
  
}
