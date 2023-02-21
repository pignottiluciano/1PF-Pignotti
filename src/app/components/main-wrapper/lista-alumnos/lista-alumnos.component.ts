import { Component } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent {
  alumnos!: Alumno[];


  constructor(
    private alumnoService: AlumnoService
  ) {}
  async ngOnInit(): Promise<void> {
    this.alumnoService.obtenerAlumnosObservable().subscribe((alumnos: Alumno[]) => {
      this.alumnos = alumnos;
    });
  }

}
