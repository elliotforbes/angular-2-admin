/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MarkdownParserService } from './markdown-parser.service';

describe('MarkdownParserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkdownParserService]
    });
  });

  it('should ...', inject([MarkdownParserService], (service: MarkdownParserService) => {
    expect(service).toBeTruthy();
  }));
});
