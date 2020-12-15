import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SchoolService {
    //user data
    userSource: BehaviorSubject<any>;
    user: Observable<object>;
    //data for school page
    schoolSource: BehaviorSubject<any>;
    school: Observable<object>;
    //data for admin page
    adminsSource: BehaviorSubject<any>;
    admins: Observable<object>;

    url = environment.url;

    constructor(private http: HttpClient, private router: Router) {
        this.userSource = new BehaviorSubject<any>('');
        this.user = new Observable(o => {
            this.userSource.subscribe(res => {
                o.next(res);
            })
        })

        this.schoolSource = new BehaviorSubject<any>('');
        this.school = new Observable(o => {
            this.schoolSource.subscribe(res => {
                o.next(res);
            })
        })

        this.adminsSource = new BehaviorSubject<any>('');
        this.admins = new Observable(o => {
            this.adminsSource.subscribe(res => {
                o.next(res);
            })
        })
    }

    loginService(email: string, password: string) {
        return this.http.post(`${this.url}/login`, { email, password })
            .subscribe(data => {
                this.router.navigate(['/school']);
                this.userSource.next(data);
            }, (err) => {
                console.log(err.error);
            });
    }

    logoutService() {
        this.userSource.next('');
        this.router.navigate(['/']);
    }

    getSchool() {
        this.getSchoolRequest()
            .subscribe(data => {
                this.schoolSource.next(data);
            }, (err) => {
                console.log(err.error);
            });
    }
    getSchoolRequest() {
        return this.http.get(`${this.url}/school`)
    }

    getAllAdmins() {
        return this.http.get(`${this.url}/administration`)
            .subscribe(data => {
                this.adminsSource.next(data);
            }, (err) => {
                console.log(err.error);
            });
    }

    addAdmin(data: any) {
        return this.http.post(`${this.url}/admin`, data)
            .subscribe(res => {
                res[2] = "total";//what to display in main area
                this.adminsSource.next(res);
            }, (err) => {
                console.log(err.error);
            })
    }

    editAdmin(data: any) {
        return this.http.put(`${this.url}/admin`, data)
            .subscribe(res => {
                res[2] = "total";//what to display in main area
                this.adminsSource.next(res);
            }, (err) => {
                console.log(err.error);
            })
    }

    deleteAdmin(id: number) {
        return this.http.delete(`${this.url}/admin/${id}`)
            .subscribe(res => {
                res[2] = "total";//what to display in main area
                this.adminsSource.next(res);
            }, (err) => {
                console.log(err.error);
            })
    }

    addCourse(data: any) {
        return this.http.post(`${this.url}/course`, data)
            .subscribe(res => {
                this.getSchoolRequest().subscribe(data => {
                    data[3] = res;
                    data[4] = undefined;
                    data[5] = 'details-course';
                    this.schoolSource.next(data);
                }, (err) => {
                    console.log(err.error);
                })
            }, (err) => {
                console.log(err.error);
            })
    }

    editCourse(data: any) {
        return this.http.put(`${this.url}/course`, data)
            .subscribe(res => {
                this.getSchoolRequest().subscribe(data => {
                    data[3] = res;
                    data[4] = undefined;
                    data[5] = 'details-course';
                    this.schoolSource.next(data);
                }, (err) => {
                    console.log(err.error);
                });
            }, (err) => {
                console.log(err.error);
            })
    }

    deleteCourse(id: number) {
        return this.http.delete(`${this.url}/course/${id}`)
            .subscribe(res => {
                this.getSchoolRequest().subscribe(data => {
                    data[3] = res;
                    data[4] = undefined;
                    data[5] = 'total';
                    this.schoolSource.next(data);
                }, (err) => {
                    console.log(err.error);
                });
            }, (err) => {
                console.log(err.error);
            })
    }

    addStudent(data: any) {
        return this.http.post(`${this.url}/student`, data)
            .subscribe(res => {
                this.getSchoolRequest().subscribe(data => {
                    data[3] = undefined;
                    data[4] = res;
                    data[5] = 'details-student';
                    this.schoolSource.next(data);
                }, (err) => {
                    console.log(err.error);
                })
            }, (err) => {
                console.log(err.error);
            })
    }

    editStudent(data: any) {
        return this.http.put(`${this.url}/student`, data)
            .subscribe(res => {
                this.getSchoolRequest().subscribe(data => {
                    data[3] = undefined;
                    data[4] = res;
                    data[5] = 'details-student';
                    this.schoolSource.next(data);
                }, (err) => {
                    console.log(err.error);
                });
            }, (err) => {
                console.log(err.error);
            })
    }

    deleteStudent(id: number) {
        return this.http.delete(`${this.url}/student/${id}`)
            .subscribe(res => {
                this.getSchoolRequest().subscribe(data => {
                    data[3] = undefined;
                    data[4] = res;
                    data[5] = 'total';
                    this.schoolSource.next(data);
                }, (err) => {
                    console.log(err.error);
                });
            }, (err) => {
                console.log(err.error);
            })
    }
}
