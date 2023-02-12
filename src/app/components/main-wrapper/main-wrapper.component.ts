import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { EditAlumnoComponent } from './edit-alumno/edit-alumno.component';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css'],
})
export class MainWrapperComponent {
  alumnos: Alumno[] = [
    { id: 1, nombre: 'Franco', apellido: 'Azari', edad: 28, estado: true },
    { id: 2, nombre: 'Agustin', apellido: 'Biblieri', edad: 27, estado: false },
    { id: 3, nombre: 'Juliana', apellido: 'Desca', edad: 28, estado: true },
    { id: 4, nombre: 'Luciano', apellido: 'Pignotti', edad: 24, estado: true },
    { id: 5, nombre: 'Agustiina', apellido: 'Diaz', edad: 23, estado: false },
    {
      id: 6,
      nombre: 'Federico',
      apellido: 'Azcuenaga',
      edad: 21,
      estado: true,
    },
    {
      id: 7,
      nombre: 'Constanza',
      apellido: 'Carballo',
      edad: 28,
      estado: true,
    },
  ];

  dataSource: MatTableDataSource<Alumno> = new MatTableDataSource<Alumno>(
    this.alumnos
  );
  columnas: string[] = [
    'nombreYApellido',
    'edad',
    'estado',
    'cambioEstado',
    'editarEliminar',
  ];

  constructor(
    private dialog: MatDialog
    ) {

    }

  cambioEstado(id: any) {
    this.alumnos.forEach((Alumno) => {
      if (id == Alumno.id) {
        Alumno.estado = !Alumno.estado;
      }
    });
  }

  modalEdit(alumno: Alumno) {
    const dialogRef = this.dialog.open(EditAlumnoComponent, {data: alumno});
  }

}
