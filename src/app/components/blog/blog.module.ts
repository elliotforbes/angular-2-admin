import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogNewComponent } from './blog-new/blog-new.component';
import { RouterModule, Routes } from '@angular/router';
import { BlogService } from './blog.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

export const blogRoutes:Routes = [
  { path: 'blog', component: BlogComponent },
  { path: 'blog/new', component: BlogNewComponent }
]

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    RouterModule.forChild(blogRoutes)
  ],
  declarations: [BlogComponent, BlogNewComponent],
  providers: [
    BlogService
  ]
})
export class BlogModule { }
