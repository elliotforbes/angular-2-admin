import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/common/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  login() {
    this.auth.login();
  }

  logout() {
    this.auth.logout();
  }

  ngOnInit() {
  }

}
