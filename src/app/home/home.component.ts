import { Component, OnInit } from '@angular/core';
import { LessonsService } from 'src/app/common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courseLessons = [];
  selectedLesson = null;

  constructor(private lessonsService: LessonsService) {}

  ngOnInit() {
    this.courseLessons = this.lessonsService.lessons;
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
}
