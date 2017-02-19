import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers () {
<<<<<<< HEAD
    // let headers = new Headers();
    // var authToken: String;
    // authToken = 'NLqjPLg94MlBoTCekz4HOHTIh2by3LQRTPo5kgce';
    // headers.append('Authorization', `Bearer ${authToken}`);

    return this.http.get(environment.api_url + "/api/users")
=======
    return this.http.get("http://localhost:8000/api/users")
>>>>>>> 41958190f2297586cf711b06b4fc57dd25fe1e17
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  getGrowth () {
    return this.http.get(environment.api_url + "/api/users/growth")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "Server Error"));
  }

}
