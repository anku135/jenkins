import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.component.html',
  styleUrls: ['./sixth.component.css']
})
export class SixthComponent implements OnInit {

  product = { id: 1, title: "product1", price: 100, description: 'description 1' }
  
  products = [
    { id: 1, title: 'product 1', price: 100, description: 'description 1' },
    { id: 2, title: 'product 2', price: 200, description: 'description 2' },
    { id: 3, title: 'product 3', price: 300, description: 'description 3' },
    { id: 4, title: 'product 4', price: 400, description: 'description 4' },
    { id: 5, title: 'product 5', price: 500, description: 'description 5' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
