import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamComponent } from './team/team.component';
import { CommonService } from 'src/assets/services/common.service';
import { PostsComponent } from './posts/posts.component';


@NgModule({
  declarations: [
    TeamsComponent,
    TeamComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule
  ],
  providers: []
})
export class TeamsModule { }
