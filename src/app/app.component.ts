import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { HttpClient } from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    status: any;//user data

    constructor(private schoolService: SchoolService,
        private http: HttpClient) { }
    ngOnInit(): void {
        this.schoolService.user.subscribe(data => {
            this.status = data;
        })
    }
}
