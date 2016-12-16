import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

/*
 * Base Components
 */
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ArticleComponent } from './article/article.component';
import { CourseComponent } from './course/course.component';
import { TagComponent } from './tag/tag.component';
import { EmailComponent } from './email/email.component';
import { SettingsComponent } from './settings/settings.component';
import { BlogComponent } from './blog/blog.component';
import { TopNavComponent } from './common/top-nav/top-nav.component';



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
    TopNavComponent
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
