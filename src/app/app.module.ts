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
import { TagComponent } from './components/tag/tag.component';
import { EmailComponent } from './components/email/email.component';
import { SettingsComponent } from './components/settings/settings.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';
import { HomeComponent } from './components/home/home.component';
import { UserGrowthComponent } from './components/home/user-growth/user-growth.component';
import { NewCommentsComponent } from './components/home/new-comments/new-comments.component';
import { NewUsersComponent } from './components/home/new-users/new-users.component';
import { TopArticlesComponent } from './components/home/top-articles/top-articles.component';


/*
 * Standalone Modules
 */ 
import { ArticleModule } from './components/article/article.module';
import { BlogModule } from './components/blog/blog.module';
import { CourseModule } from './components/course/course.module';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UserComponent },
  { path: 'settings', component: SettingsComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TagComponent,
    EmailComponent,
    SettingsComponent,
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
    BlogModule,
    CourseModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
