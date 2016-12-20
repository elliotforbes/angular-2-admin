import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Article } from './article';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  getArticles() {
    return this.http.get("http://localhost:8000/api/lessons")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

  getArticle(id) {
    return this.http.get("http://localhost:8000/api/lesson/" + id)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || "Server Error"));
  }

}
