import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations'; use this if we don't need animations on angular material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CourseService } from './course.service';
import { MatComponentsModule } from './mat-components.module';

@NgModule({
  declarations: [
    AppComponent,
    EditCourseComponent,
  ],
  entryComponents: [
    EditCourseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatComponentsModule,
    FormsModule
  ],
  providers: [
    CourseService,
    { provide: CourseService, useClass: CourseService },
    // { provide: DIALOG_DATA, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
