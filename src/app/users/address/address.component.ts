import { Component, Input, OnInit } from '@angular/core';

import { Address } from 'src/assets/classes/address';




@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() public address!: Address;

  constructor() { }

  ngOnInit(): void { }
}

