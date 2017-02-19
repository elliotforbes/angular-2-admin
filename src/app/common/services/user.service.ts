import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers () {
    return this.http.get(environment.api_url + "/api/users")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  getGrowth () {
    return this.http.get(environment.api_url + "/api/users/growth")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "Server Error"));
  }

}
