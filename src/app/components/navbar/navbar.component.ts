// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrls: ['./navbar.component.css']
// })
// export class NavbarComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    name: string;
    role: string;
    img: string;
    constructor(private schoolService: SchoolService) { }

    ngOnInit(): void {
        this.schoolService.user.subscribe(data => {
            this.name = data[0];
            this.role = data[1];
            this.img = data[2];
        })
    }
    logout() {
        this.schoolService.logoutService()
    }
}