import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from './edit-course/edit-course.component';
//import 'rxjs/add/observable/timer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isChecked = true;

  minDate = new Date(2018, 10, 1);
  maxDate = new Date(2018, 11, 1);

  categories = [
    { name: 'Beginer' },
    { name: 'Intermediate' },
    { name: 'Advanced' },
  ];

  colors = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Green' },
    { id: 3, name: 'Blue' }
  ];

  color = 2;

  progress = 0;
  timerInterval;
  isLoading = false;

  /**
   *
   */
  constructor(private dialog: MatDialog) {
    // this.isLoading = true;
    // this.getCourses()
    //   .subscribe(x => this.isLoading = false);
    // this.timerInterval = setInterval(() => {
    //   this.progress++;
    //   if (this.progress >= 100) {
    //     clearInterval(this.timerInterval);
    //   }
    // }, 200);
  }

  // getCourses(): Observable<any> {
  //   return Observable.timer(2000);
  // }

  onChange($event) {
    console.log($event);
  }

  selectCategory(category) {
    this.categories
        .filter(c => c !== category)
        .forEach(c => c['selected'] = false);

        category.selected = !category.selected;
  }

  openDialog() {
    this.dialog.open(EditCourseComponent, {
      data: {
        courseId: 1
      }
    })
      .afterClosed()
      .subscribe(result => console.log(result));
  }

}
