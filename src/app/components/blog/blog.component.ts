import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [
    BlogService
  ]
})
export class BlogComponent implements OnInit {

  private blogs: any;

  private blogService: BlogService;

  constructor(blogService: BlogService) {
    blogService.getBlogPosts().subscribe(posts => {
      this.blogs = posts.posts.data;
    }, 
    err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
