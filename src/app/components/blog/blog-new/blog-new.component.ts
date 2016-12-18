import { Component, OnInit } from '@angular/core';
import { MarkdownParserService } from 'app/common/services/markdown-parser.service';

@Component({
  selector: 'app-blog-new',
  templateUrl: './blog-new.component.html',
  styleUrls: ['./blog-new.component.scss'],
  providers: [ MarkdownParserService ]
})
export class BlogNewComponent implements OnInit {

  convertedText: string;

  constructor(private md: MarkdownParserService) { }

  ngOnInit() {
  }

  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
  }

}
