import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/common/services/user.service';

@Component({
  selector: 'app-new-users',
  templateUrl: './new-users.component.html',
  styleUrls: ['./new-users.component.css'],
  providers: [
    UserService
  ]
})
export class NewUsersComponent implements OnInit {

  totalUsers: number;
  weekGrowth: number;
  users: any;

  constructor(private userService: UserService) {
    this.userService.getUsers()
      .subscribe(users => {
        console.log(users);
        this.totalUsers = users.users.total;
        this.users = users.users.data;
      },err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }

}
