import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Posts } from 'src/assets/classes/posts';
import { UserService } from '../users.service';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss']
})
export class AddEditPostComponent implements OnInit {


  @Input() public post: Posts = new Posts();
  @Output() public postEmitter = new EventEmitter();
  @Output() public closeEmitter = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  public savePost() {
    console.log(this.post);
    this.postEmitter.emit(this.post);
    // this.userService.savePost(this.post).subscribe((res: any) => {
    //   console.log(res);
    // })
  }

  public close() {
    this.closeEmitter.emit({});
  }

}
