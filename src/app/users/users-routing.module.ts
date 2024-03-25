import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { SkillsComponent } from './skills/skills.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'profile/:id/:id2', component: ProfileComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'posts', component: PostsComponent },
  { path: ':userId/posts', component: PostsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
