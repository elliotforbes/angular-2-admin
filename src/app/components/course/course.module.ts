import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { CourseService } from './course.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EditCourseComponent } from './edit-course/edit-course.component';

export const courseRoutes: Routes = [
  { path: 'courses', component: CourseComponent },
  { path: 'course/new', component: NewCourseComponent },
  { path: 'course/edit/:id', component: EditCourseComponent }
]

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    CommonModule,
    RouterModule.forChild(courseRoutes)
  ],
  declarations: [CourseComponent, NewCourseComponent, EditCourseComponent],
  providers: [
    CourseService
  ]
})
export class CourseModule { }
