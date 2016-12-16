import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

/*
 * Base Components
 */
import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { ArticleComponent } from './components/article/article.component';
import { CourseComponent } from './components/course/course.component';
import { TagComponent } from './components/tag/tag.component';
import { EmailComponent } from './components/email/email.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BlogComponent } from './components/blog/blog.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { HomeComponent } from './components/home/home.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'articles', component: ArticleComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ArticleComponent,
    CourseComponent,
    TagComponent,
    EmailComponent,
    SettingsComponent,
    BlogComponent,
    TopNavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
