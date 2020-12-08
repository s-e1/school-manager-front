import { Component, OnInit, Input } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { DetailsCourse } from 'src/app/models/details.model';

@Component({
    selector: 'app-course-form',
    templateUrl: './course-form.component.html',
    styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {
    @Input() details: DetailsCourse;
    @Input() formType: string;
    selectedImage: File;
    preview: string | ArrayBuffer;

    constructor(private schoolService: SchoolService) { }
    ngOnInit(): void { }

    submitAdd() {
        var req = this.prepareRequest();
        this.schoolService.addCourse(req);
    }
    submitEdit() {
        var req = this.prepareRequest();
        this.schoolService.editCourse(req);
    }
    submitDelete() {
        if (confirm("Are you sure you want to delete this course?")) {
            this.schoolService.deleteCourse(this.details[0].id);
        }
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
        var req = { ...this.details[0] };
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
