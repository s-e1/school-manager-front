import { Component, OnInit, Input } from '@angular/core';
import { DetailsCourse } from 'src/app/models/details.model';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
    @Input() course: DetailsCourse;
    constructor() { }
    ngOnInit(): void { }
}