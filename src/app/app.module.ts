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
import { ArticleModule } from './components/article/article.module';
import { CourseComponent } from './components/course/course.component';
import { TagComponent } from './components/tag/tag.component';
import { EmailComponent } from './components/email/email.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BlogComponent } from './components/blog/blog.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { HomeComponent } from './components/home/home.component';
import { UserGrowthComponent } from './components/home/user-growth/user-growth.component';
import { NewCommentsComponent } from './components/home/new-comments/new-comments.component';
import { NewUsersComponent } from './components/home/new-users/new-users.component';
import { TopArticlesComponent } from './components/home/top-articles/top-articles.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'courses', component: CourseComponent },
  { path: 'settings', component: SettingsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CourseComponent,
    TagComponent,
    EmailComponent,
    SettingsComponent,
    BlogComponent,
    TopNavComponent,
    HomeComponent,
    UserGrowthComponent,
    NewCommentsComponent,
    NewUsersComponent,
    TopArticlesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ArticleModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
