import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [
    UserService
  ]
})
export class UserComponent implements OnInit {

  private users: any;
  private userService: UserService;

  constructor(userService: UserService) {
    userService.getUsers().subscribe(users => {
      this.users = users.users.data;
    },
    err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
