import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotpagefoundComponent } from './pages/notpagefound/notpagefound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { StudentComponent } from './pages/student/student.component';
import { AppRoutingModule } from './app-routing.module';
import { StudentBookComponent } from './pages/booksStudent/student-book1/student-book.component';
import { TeacherBookComponent } from './pages/booksTeacher/teacher-book1/teacher-book.component';
import { StudentBook2Component } from './pages/booksStudent/student-book2/student-book2.component';
import { StudentBook3Component } from './pages/booksStudent/student-book3/student-book3.component';
import { StudentBook4Component } from './pages/booksStudent/student-book4/student-book4.component';
import { StudentBook5Component } from './pages/booksStudent/student-book5/student-book5.component';
import { StudentBook6Component } from './pages/booksStudent/student-book6/student-book6.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotpagefoundComponent,
    DashboardComponent,
    StudentComponent,
    StudentBookComponent,
    TeacherBookComponent,
    StudentBook2Component,
    StudentBook3Component,
    StudentBook4Component,
    StudentBook5Component,
    StudentBook6Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
