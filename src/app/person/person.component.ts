import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  personName = 'person1'
  personAddress = 'pune'
  personAge = 30
  personPhone = '+9134534354'
  personEmail = 'person1@test.com'


  constructor() { }

  ngOnInit(): void {
  }

}
