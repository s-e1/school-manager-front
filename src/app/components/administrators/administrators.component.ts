// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-administrators',
//   templateUrl: './administrators.component.html',
//   styleUrls: ['./administrators.component.css']
// })
// export class AdministratorsComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { HttpClient } from "@angular/common/http";
import { DetailsAdmin, Total } from 'src/app/models/details.model';

@Component({
    selector: 'app-administrators',
    templateUrl: './administrators.component.html',
    styleUrls: ['./administrators.component.css']
})
export class AdministratorsComponent implements OnInit {
    admins: DetailsAdmin[];
    total: Total;
    mainDisplay: string;
    details: DetailsAdmin;
    formType: string = undefined;
    constructor(private schoolService: SchoolService, private http: HttpClient) { }

    ngOnInit(): void {
        this.schoolService.getAllAdmins();
        this.schoolService.admins.subscribe(data => {
            this.admins = data[0];
            this.total = data[1];
            this.mainDisplay = data[2] || 'total';
            this.getId()
        })
    }
    //remove owner data from admins, if user isn't owner
    getId() {
        this.schoolService.user.subscribe(data => {
            var id = data[3];
            if (this.admins && id !== 1) {
                this.admins.shift();
            }
        })
    }
    addAdministrator() {
        this.details = {
            name: "",
            role: "",
            phone: "",
            email: "",
            image: "",
            password: ""
        }
        this.formType = 'add';
        this.mainDisplay = "admin-form";
    }
    showDetails(admin: any) {
        console.log(admin);
        this.details = admin;
        this.formType = 'edit';
        this.mainDisplay = "admin-form";
        window.scroll(0, 0);
    }
}
