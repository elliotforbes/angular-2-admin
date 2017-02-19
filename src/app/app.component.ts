import { Component } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _cookieService:CookieService){}

  ngOnInit() {
    this._cookieService.put('test', 'test');
    console.log("Set Test Cookie as Test");
  }

  getCookie(key: string){
    return this._cookieService.get(key);
  }
}
