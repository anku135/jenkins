import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eighth',
  templateUrl: './eighth.component.html',
  styleUrls: ['./eighth.component.css']
})
export class EighthComponent implements OnInit {

  public users = [
    { id: 2, name: 'user 1', email: 'user1@test.com', address: 'pune' },
    { id: 1, name: 'user 2', email: 'user2@test.com', address: 'mumbai' },
    { id: 3, name: 'user 3', email: 'user3@test.com', address: 'pune' },
    { id: 4, name: 'user 4', email: 'user4@test.com', address: 'karad' },
    { id: 5, name: 'user 5', email: 'user5@test.com', address: 'satara' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(user) {
    alert('deleting user: ' + user.id + " , " + user.name)
  }

  onEdit(user) {
    alert('editing user: ' + user.id + " , " + user.name)
  }

}
