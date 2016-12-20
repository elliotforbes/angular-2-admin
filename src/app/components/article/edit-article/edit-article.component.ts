import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'app/components/article/article';
import { ArticleService } from 'app/components/article/article.service';
import { MarkdownParserService } from 'app/common/services/markdown-parser.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
  providers: [MarkdownParserService, ArticleService]
})
export class EditArticleComponent implements OnInit {

  sub: any;
  convertedText: string;
  article: any;

  constructor(private route: ActivatedRoute, private md: MarkdownParserService, private articleService: ArticleService) {  }

  ngOnInit() {
    this.article = this.articleService.getArticle(155)
      .subscribe(article => {
        this.article = article.lesson;
        this.updateOutput(this.article.body);
      }, err => {
        console.log(err);
      });
  }

  save (article: any) {
    console.log(article);
  }

  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
  }

}
