import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  
  personName = "steve jobs"
  personAge = 58
  personAddress = 'USA'
  personPhone = '+132342324'

  
  person = {
    name: 'person2',
    age: 40,
    address: 'pune',
    phone: '+913242234',
    email: 'person2@test.com'
  }


  constructor() { }

  ngOnInit(): void {
  }

}
