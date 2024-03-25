import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/assets/enums/routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  value = 'value';
  value1 = 'value 2';
  color = 'red';
  show = true;
  users = [
    { name: 'test 1', address: { city: 'Hyd', state: 'TG' }, roles: ['user', 'admin'] },
    { name: 'test 2', address: { city: 'Gun', state: 'AP' }, roles: ['user'] },
    { name: 'test 3' },

  ]
  date = new Date();
  routesEnum = ROUTES;

  constructor(private router: Router) {
    // this.router.navigateByUrl('users/profile/2');
  }

  submit() {
    console.log(this.value1);
  }
  toggle() {
    this.show = !this.show;
  }
  navigate() {
    // this.router.navigate([ROUTES.PROFILE, 2])
    this.router.navigateByUrl(ROUTES.PROFILE + '/2');
  }
}
