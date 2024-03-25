import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTES } from 'src/assets/enums/routes';
import { CommonService } from 'src/assets/services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
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

  constructor(private router: Router, private cs: CommonService) {
    // this.router.navigateByUrl('users/profile/2');

  }
  ngOnInit(): void {
    this.cs.add(1, 2);
    console.log('app : ', this.cs.result);
    // setInterval(() => {
    //   console.log('app i : ', this.cs.result);
    // }, 1000);
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
