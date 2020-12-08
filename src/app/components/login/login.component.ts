import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string = "";
    password: string = "";
    constructor(private schoolService: SchoolService) { }

    ngOnInit(): void { }
    login() {
        this.schoolService.loginService(this.email, this.password)
    }
}
