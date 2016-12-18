import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  private articleService: ArticleService;

  private articles: any;

  constructor(articleService: ArticleService) { 
    articleService.getArticles().subscribe(
        articles => {
          this.articles = articles.lessons.data;
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnInit() {

  }

}
