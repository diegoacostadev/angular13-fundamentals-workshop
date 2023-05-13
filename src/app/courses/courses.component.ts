import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/common/models/course';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
}

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
      favorite: false
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

  selectedCourse = emptyCourse;
  selectedTitle = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectCourse(course) {
    this.selectedCourse = { ...course };
    this.selectedTitle = course.title;
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }

  deleteCourse(id: number) {
    this.courses = this.courses.filter(c => c.id !== id);
  }

  saveCourse(course) {
    this.courses = this.courses.map(c => {
      if (c.id == course.id) {
        return {
          ...course
        };
      }
      return c;
    })
  }

}
