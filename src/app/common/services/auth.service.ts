import { Injectable } from '@angular/core';


@Injectable()
export class AuthService {


  constructor() { }

  login() {
    localStorage.setItem('profile', "test");
  }

  logout() {
    localStorage.removeItem('profile');
  }

}
