import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './pages/student/student.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { StudentBookComponent } from './pages/booksStudent/student-book1/student-book.component';
import { TeacherBookComponent } from './pages/booksTeacher/teacher-book1/teacher-book.component';


const routes: Routes = [
    { path: '', component: DashboardComponent},
    { path: 'estudiante', component: StudentComponent},
    { path: 'estudiante/libro', component: StudentBookComponent},
    { path: 'docente', component: TeacherComponent},
    { path: 'docente/libro', component: TeacherBookComponent},
    { path: '**', redirectTo: ''}
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }