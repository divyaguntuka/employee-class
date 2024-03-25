import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Profile } from 'src/assets/classes/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  profiles: Profile[] = [
    { id: 1, name: 'User 1', dob: new Date(), bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit, hic ex laborum perspiciatis, impedit dolore eum consequatur odit cum totam optio voluptas rerum! Aperiam repudiandae quo odit id veritatis.' },
    { id: 2, name: 'User 2', dob: new Date(), bio: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit, hic ex laborum perspiciatis, impeditdolore eum consequatur odit cum totam optio voluptas rerum! Aperiam repudiandae quo odit id veritatis.' },
  ]
  selectedProfile!: Profile;

  ngOnInit(): void {
    this.route.queryParams.subscribe((path: any) => {
      console.log('query param : ', path);
      if (path?.id) {
        this.setProfile(path.id);
      }
    });
    this.route.params.subscribe((path: any) => {
      console.log('path params: ', path);
      if (path?.id) {
        this.setProfile(path.id);
      }
    })
  }

  public setProfile(id: number) {
    const p = this.profiles.find(e => e.id == id);
    if (p) {
      this.selectedProfile = p;
    }
  }

}
