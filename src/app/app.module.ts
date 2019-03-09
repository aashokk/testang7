import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MypipePipe } from './mypipe.pipe';
import { StudentsComponent } from './students/students.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    MypipePipe,
    StudentsComponent,
    StudentdetailsComponent,
    PagenotfoundComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
