// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-student',
//   templateUrl: './student.component.html',
//   styleUrls: ['./student.component.css']
// })
// export class StudentComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit, Input } from '@angular/core';
import { DetailsStudent } from 'src/app/models/details.model';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
    @Input() student: DetailsStudent;
    constructor() { }
    ngOnInit(): void { }
}
