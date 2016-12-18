import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarkdownParserService } from 'app/common/services/markdown-parser.service';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss'],
  providers: [MarkdownParserService]
})
export class EditArticleComponent implements OnInit {
  
  private sub: any;
  id: number;
  convertedText: string;

  constructor(private route: ActivatedRoute, private md: MarkdownParserService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }


  updateOutput(mdText: string) {
    this.convertedText = this.md.convert(mdText);
  }


}
