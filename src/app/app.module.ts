// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { AdministratorComponent } from './components/administrator/administrator.component';
// import { AdministratorsComponent } from './components/administrators/administrators/administrators.component';
// import { CourseComponent } from './components/course/course.component';
// import { LoginComponent } from './components/login/login.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
// import { SchoolComponent } from './components/school/school.component';
// import { StudentComponent } from './components/student/student.component';
// import { AdminFormComponent } from './forms/admin-form/admin-form.component';
// import { CourseFormComponent } from './forms/course-form/course-form.component';
// import { StudentFormComponent } from './forms/student-form/student-form.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     AdministratorComponent,
//     AdministratorsComponent,
//     CourseComponent,
//     LoginComponent,
//     NavbarComponent,
//     SchoolComponent,
//     StudentComponent,
//     AdminFormComponent,
//     CourseFormComponent,
//     StudentFormComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SchoolComponent } from './components/school/school.component';
import { AdministratorsComponent } from './components/administrators/administrators.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentComponent } from './components/student/student.component';
import { CourseComponent } from './components/course/course.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { CourseFormComponent } from './forms/course-form/course-form.component';
import { StudentFormComponent } from './forms/student-form/student-form.component';
import { AdminFormComponent } from './forms/admin-form/admin-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SchoolComponent,
    AdministratorsComponent,
    NavbarComponent,
    StudentComponent,
    CourseComponent,
    AdministratorComponent,
    CourseFormComponent,
    StudentFormComponent,
    AdminFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
