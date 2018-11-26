import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title = 'list of courses';
  imageUrl = 'http://lorempixel.com/g/400/200/';
  courses;
  isActive = true;

  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  onSave($event: MouseEvent) {
    console.log('button was clicked', $event);
    $event.stopPropagation();
  }
  ngOnInit() {}
}
