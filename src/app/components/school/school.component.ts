// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-school',
//   templateUrl: './school.component.html',
//   styleUrls: ['./school.component.css']
// })
// export class SchoolComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { HttpClient } from "@angular/common/http";
import { DetailsCourse, DetailsStudent, Total, Student } from 'src/app/models/details.model';

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html',
    styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
    courses: DetailsCourse[];
    students: DetailsStudent[];
    total: Total;
    mainDisplay: string; //determines what's displayed in main area
    detailsCourse: any;
    detailsStudent: Student;
    formType: string = undefined;//determines if form is 'add' or 'edit'
    position: number;//type of admin
    constructor(private schoolService: SchoolService, private http: HttpClient) { }

    ngOnInit(): void {
        this.schoolService.getSchool();
        this.schoolService.school.subscribe(data => {
            this.courses = data[0];
            this.students = data[1];
            this.total = data[2];
            this.detailsCourse = data[3];
            this.detailsStudent = data[4];
            this.mainDisplay = data[5] || 'total';
        })
        this.schoolService.user.subscribe(data => {
            this.position = data[1];
        })
    }

    addCourse() {
        this.detailsCourse = [{
            name: "",
            description: "",
            image: ""
        }];
        this.formType = 'add';
        this.mainDisplay = 'course-form';
    }
    addStudent() {
        const listCourses = this.courses.map(item => ({ id: item.id, name: item.name }));
        this.detailsStudent = [{
            name: "",
            phone: "",
            email: "",
            image: ""
        }, [], listCourses];
        this.formType = 'add';
        this.mainDisplay = 'student-form';
    }
    showDetailsCourse(courseId: number) {
        return this.http.get(`http://localhost:3001/course/${courseId}`).subscribe(data => {
            this.detailsCourse = data;
            this.mainDisplay = 'details-course';
            window.scroll(0, 0);
        })
    }
    changeDetailsCourse() {
        this.formType = 'edit';
        this.mainDisplay = 'course-form';
    }

    showDetailsStudent(studentId: number) {
        return this.http.get<Student>(`http://localhost:3001/student/${studentId}`).subscribe(data => {
            this.detailsStudent = data;
            this.mainDisplay = 'details-student';
            window.scroll(0, 0);
        })
    }
    changeDetailsStudent() {
        this.formType = 'edit';
        this.mainDisplay = 'student-form';
    }
}
