import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

/*
 * Base Components
 */
import { AppComponent } from './app.component';
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
import { UserModule } from './components/user/user.module';
import { SocialComponent } from './components/social/social/social.component';
import { LoginComponent } from './components/login/login.component';


/*
 * Custom Libraries
 */
import { CookieService } from 'angular2-cookie/services/cookies.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'social', component: SocialComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'email', component: EmailComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    TagComponent,
    EmailComponent,
    SettingsComponent,
    TopNavComponent,
    HomeComponent,
    UserGrowthComponent,
    NewCommentsComponent,
    NewUsersComponent,
    TopArticlesComponent,
    SocialComponent,
    LoginComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ArticleModule,
    BlogModule,
    CourseModule,
    UserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
