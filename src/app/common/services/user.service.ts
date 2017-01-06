import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers () {
    // let headers = new Headers();
    // var authToken: String;
    // authToken = 'NLqjPLg94MlBoTCekz4HOHTIh2by3LQRTPo5kgce';
    // headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get("http://localhost:8000/api/users")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  getGrowth () {
    return this.http.get("http://localhost:8000/api/users/growth")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "Server Error"));
  }

}
