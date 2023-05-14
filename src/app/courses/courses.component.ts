import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/common/models/course';
import { CoursesService } from 'src/app/common/services/courses.service';

const emptyCourse: Course = {
  id: null,
  title: '',
  description: '',
  percentComplete: 0,
  favorite: false,
};

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses = [];
  courses$:Observable<Course[]>;

  selectedCourse = emptyCourse;
  selectedTitle = '';

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    // this.coursesService.getAll().subscribe((data:Course[]) => {
    //   this.courses = data;
    // })
    this.courses$ = this.coursesService.getAll();
  }

  selectCourse(course) {
    this.selectedCourse = { ...course };
    this.selectedTitle = course.title;
  }

  reset() {
    this.selectCourse({ ...emptyCourse });
  }

  deleteCourse(id: string) {
    this.coursesService.delete(id).subscribe((data: Course) => {
      this.courses = [...this.courses].filter(c => c.id != id);
    })
  }

  updateCourse(course: Course) {
    this.coursesService.update(course).subscribe((data: Course) => {
      this.courses = [...this.courses].map(c => c.id == data.id ? data : c);
    })
  }

  createCourse(course: Course) {
    this.coursesService.create(course).subscribe((data) => {
      const draft = [...this.courses];
      draft.push(data);
      this.courses = draft;
    })
  }

  saveCourse(course: Course) {
    if (course.id) {
      this.updateCourse(course);
    } else {
      this.createCourse(course);
    }
  }
}
