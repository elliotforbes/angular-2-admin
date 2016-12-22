import { Component, OnInit } from '@angular/core';
import { MarkdownParserService } from 'app/common/services/markdown-parser.service';
import { Article } from 'app/components/article/article';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
  providers: [ MarkdownParserService ]
})
export class NewArticleComponent implements OnInit {

  convertedText: string;
  article: Article;

  constructor(private md: MarkdownParserService) { }

  ngOnInit() {
    this.article = new Article();
  }

  save(article: any) {
    console.log(article);
  }

  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
  }

}
