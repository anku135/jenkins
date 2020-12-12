import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {

  bgColor = "black"

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color) {
    this.bgColor = color
  }

}
