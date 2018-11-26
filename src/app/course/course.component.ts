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
  email = 'test@test.com';
  course = {
    title: 'The angular course',
    rating: 4.78956,
    students: 30112,
    price: 190.12,
    releaseDate: new Date(2018, 3, 2)
  };
  text =
    // tslint:disable-next-line:max-line-length
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida eget felis vitae consequat. Proin id mauris ex. Integer sed lectus sodales, rutrum nunc elementum, condimentum lectus. Proin sed velit vitae nunc hendrerit eleifend ac non magna. Fusce sed auctor elit. Nunc ac lectus justo. Pellentesque in tristique purus, sed dapibus massa. Curabitur rhoncus, turpis vel tristique dapibus, sapien risus blandit sapien';
  constructor(service: CourseService) {
    this.courses = service.getCourses();
  }

  onSave($event: MouseEvent) {
    console.log('button was clicked', $event);
    $event.stopPropagation();
  }
  onKeyUp() {
    console.log(this.email);
  }
  ngOnInit() {}
}
