import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleComponent } from './article.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticleService } from './article.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditArticleComponent } from './edit-article/edit-article.component';

export const articleRoutes: Routes = [
  { path: 'articles', component: ArticleComponent },
  { path: 'article/new', component: NewArticleComponent },
  { path: 'article/edit/:id', component: EditArticleComponent }
]

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    CommonModule,
    RouterModule.forChild(articleRoutes)
  ],
  declarations: [ArticleComponent, NewArticleComponent, EditArticleComponent],
  providers: [
    ArticleService
  ]
})
export class ArticleModule { }
