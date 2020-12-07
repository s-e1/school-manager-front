// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-student-form',
//   templateUrl: './student-form.component.html',
//   styleUrls: ['./student-form.component.css']
// })
// export class StudentFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit, Input } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { Student, CourseBasic } from 'src/app/models/details.model';

@Component({
    selector: 'app-student-form',
    templateUrl: './student-form.component.html',
    styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {
    @Input() details: Student;
    @Input() formType: string;//'add' or 'edit'
    selectedImage: File;
    preview: string | ArrayBuffer;

    constructor(private schoolService: SchoolService) { }
    ngOnInit(): void { }

    submitAdd() {
        var req = this.prepareRequest();
        this.schoolService.addStudent(req);
    }
    submitEdit() {
        var req = this.prepareRequest();
        this.schoolService.editStudent(req);
    }
    submitDelete() {
        if (confirm("Are you sure you want to delete this student?")) {
            this.schoolService.deleteStudent(this.details[0].id);
        }
    }
    //checks if enrolled in course, to display in checkbox
    isChecked(courseId: number) {
        return this.details[1].some(c => c.id === courseId)
    }
    //enroll or unenroll to course
    enroll(course: CourseBasic) {
        const index = this.details[1].findIndex(item => item.id === course.id);
        index > -1 ? this.details[1].splice(index, 1) : this.details[1].push(course);
    }
    selectImage(event: any) {
        this.selectedImage = <File>event.target.files[0];
        //display preview
        if (this.selectedImage) {
            var reader = new FileReader();
            reader.readAsDataURL(this.selectedImage); // read file as data url
            reader.onload = (ev) => { // called once readAsDataURL is completed
                this.preview = ev.target.result;
            }
        }
    }
    prepareRequest() {
        var list = this.details[1].map(e => e.id);
        var req = { ...this.details[0], courses: list };
        const fd = new FormData();
        if (this.selectedImage) {
            fd.append('imageFile', this.selectedImage, this.selectedImage.name);
        } else {
            fd.append('imageFile', this.selectedImage);
        }
        fd.append('text', JSON.stringify(req));
        return fd;
    }
}