import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { SchoolService } from 'src/app/services/school.service';
import { DetailsAdmin } from 'src/app/models/details.model';

@Component({
    selector: 'app-admin-form',
    templateUrl: './admin-form.component.html',
    styleUrls: ['./admin-form.component.css']
})
export class AdminFormComponent implements OnChanges {
    @Input() details: DetailsAdmin;
    @Input() formType: string;//'add' or 'edit'
    selectedImage: File;
    preview: string | ArrayBuffer;
    position: number;//of admin
    id: number;//of admin

    constructor(private schoolService: SchoolService) { }
    ngOnInit(): void {
        this.schoolService.user.subscribe(data => {
            this.position = data[1];
            this.id = data[3];
        })
    }
    ngOnChanges(changes: SimpleChanges) {
        Object.assign(this.details, changes.details.currentValue);
    }

    submitAdd() {
        var req = this.prepareRequest();
        this.schoolService.addAdmin(req);
    }
    submitEdit() {
        var req = this.prepareRequest();
        this.schoolService.editAdmin(req);
    }
    submitDelete() {
        if (confirm("Are you sure you want to delete this administrator?")) {
            this.schoolService.deleteAdmin(this.details.id);
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
        var req = { ...this.details };
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
