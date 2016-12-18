import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  providers: [
    CourseService
  ]
})
export class CourseComponent implements OnInit {

  private courses: any;

  private courseService: CourseService;

  constructor(courseService: CourseService) { 
    courseService.getCourses().subscribe(courses => {
      this.courses = courses.courses.data;
    }, 
    err => {
      console.log(err);
    });
  }

  ngOnInit() {
  }

}
