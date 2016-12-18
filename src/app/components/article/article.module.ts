import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleService } from './article.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

export const articleRoutes:Routes = [
  { path: 'articles', component: ArticleComponent},
  { path: 'article/new', component: NewArticleComponent }
]

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    RouterModule.forChild(articleRoutes)
  ],
  declarations: [ArticleComponent, NewArticleComponent],
  providers: [
    ArticleService
  ]
})
export class ArticleModule { }
