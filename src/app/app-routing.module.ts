import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StudentsComponent} from './students/students.component';
import {StudentdetailsComponent} from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';
const routes: Routes = [
  {
    path : "", redirectTo : 'students', pathMatch : "full"
  },
  {
    path : "student" , children : [
      {
        path : '', component : StudentComponent
      },
      {
        path : 'studentdetails', component : StudentdetailsComponent
      }
    ]
  },
  {
    path : 'students', component : StudentsComponent
  },
  {
    path : '**', component : PagenotfoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
