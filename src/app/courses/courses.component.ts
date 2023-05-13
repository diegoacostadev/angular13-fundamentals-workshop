import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [
    {
      id: 1,
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: true
    },
    {
      id: 2,
      title: 'Javascript: The Hard parts v2',
      description: 'Learn javascript like a pro!',
      percentComplete: 34,
      favorite: true
    },
    {
      id: 3,
      title: 'NextJs Introduction',
      description: 'Learn the fundamentals of NextJs with Sott',
      percentComplete: 10,
      favorite: true
    }
  ];

  selectedCourse = null;

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(id: number) {
    this.courses = this.courses.filter(c => c.id !== id);
  }

}
