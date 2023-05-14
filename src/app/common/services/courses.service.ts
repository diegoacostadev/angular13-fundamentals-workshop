import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/common/models/course';

const BASE_URL = `http://localhost:3000`;

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Course[]> {
    return this.http.get<Course[]>(this.getUrl());
  }

  get(id: string) {
    return this.http.get(this.getUrlWithId(id))
  }

  create(course: Course) {
    return this.http.post(this.getUrl(), course)
  }

  update(course: Course) {
    return this.http.put(this.getUrlWithId(course.id), course);
  }

  delete(id: string) {
    return this.http.delete(this.getUrlWithId(id))
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 26,
      favorite: false
    },
    {
      id: '2',
      title: 'Javascript: The Hard parts v2',
      description: 'Learn javascript like a pro!',
      percentComplete: 34,
      favorite: true
    },
    {
      id: '3',
      title: 'NextJs Introduction',
      description: 'Learn the fundamentals of NextJs with Sott',
      percentComplete: 10,
      favorite: true
    }
  ]
}
