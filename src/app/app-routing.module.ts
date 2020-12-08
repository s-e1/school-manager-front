import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolComponent } from './components/school/school.component'
import { AdministratorsComponent } from './components/administrators/administrators.component'

const routes: Routes = [
    { path: 'school', component: SchoolComponent },
    { path: 'administration', component: AdministratorsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
