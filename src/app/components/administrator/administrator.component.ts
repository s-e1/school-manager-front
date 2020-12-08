import { Component, OnInit, Input } from '@angular/core';
import { DetailsAdmin } from 'src/app/models/details.model';

@Component({
    selector: 'app-administrator',
    templateUrl: './administrator.component.html',
    styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {
    @Input() admin: DetailsAdmin;
    constructor() { }
    ngOnInit(): void { }
}