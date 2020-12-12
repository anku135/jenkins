import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  category = 1

  constructor() { }

  ngOnInit(): void {
  }

  changeCategory(category){
    this.category=category
  }
}
