import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { UserComponent } from './user/user.component';
import { PostsComponent } from './posts/posts.component';
import { AddressComponent } from './address/address.component';
import { CommentComponent } from './comment/comment.component';
import { CommentsComponent } from './comments/comments.component';
import { AddEditPostComponent } from './add-edit-post/add-edit-post.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    UsersComponent,
    ProfileComponent,
    SkillsComponent,
    UserComponent,
    PostsComponent,
    AddressComponent,
    CommentComponent,
    CommentsComponent,
    AddEditPostComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule
  ]
})
export class UsersModule { }
