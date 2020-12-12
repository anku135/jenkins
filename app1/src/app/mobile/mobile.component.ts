import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobile = {
    model: 'iPhone 12 Pro Max',
    company: 'Apple',
    price: 156000,
    
    configuration: {
      cpu: 'A14',
      gpu: '4 core',
      ram: '6GB',
      storage: '512GB'
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
