import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styles: [
  ]
})
export class StudentComponent {


  libros: string[] = ['Primer Grado', 'Segundo Grado','tercer Grado','Cuarto Grado','Quinto Grado','Sexto Grado'];
}
