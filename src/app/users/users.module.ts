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
   
   
  
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
