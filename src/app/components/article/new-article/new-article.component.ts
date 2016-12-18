import { Component, OnInit } from '@angular/core';
import { MarkdownParserService } from 'app/common/services/markdown-parser.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss'],
  providers: [ MarkdownParserService ]
})
export class NewArticleComponent implements OnInit {

  convertedText: string;

  constructor(private md: MarkdownParserService) { }

  ngOnInit() {
  }

  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
  }

}
