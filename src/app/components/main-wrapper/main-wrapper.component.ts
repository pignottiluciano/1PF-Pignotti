import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { AddAlumnoComponent } from './add-alumno/add-alumno.component';
import { EditAlumnoComponent } from './edit-alumno/edit-alumno.component';

@Component({
  selector: 'app-main-wrapper',
  templateUrl: './main-wrapper.component.html',
  styleUrls: ['./main-wrapper.component.css'],
})
export class MainWrapperComponent implements OnInit {
  alumnos!: Alumno[];

  dataSource!: MatTableDataSource<Alumno>;
  columnas: string[] = ['nombreYApellido', 'edad', 'estado', 'editarEliminar'];

  constructor(
    private dialog: MatDialog,
    private alumnoService: AlumnoService
  ) {}
  async ngOnInit(): Promise<void> {
    this.alumnos = await this.alumnoService.obtenerAlumnosPromise();
    this.actualizarLista();
  }

  cambioEstado(id: any) {
    if (this.alumnos) {
      this.alumnos.forEach((alumno) => {
        if (id == alumno.id) {
          alumno.estado = !alumno.estado;
        }
      });
    }
  }

  actualizarLista() {
    this.dataSource = new MatTableDataSource<Alumno>(this.alumnos);
  }

  modalEdit(alumno: Alumno) {
    const dialogRef = this.dialog.open(EditAlumnoComponent, { data: alumno });
  }

  AgregarAlumno() {
    const dialogRef = this.dialog.open(AddAlumnoComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      this.actualizarLista();
    });
  }

  eliminarUsuario(index: number, id: any) {
    if (confirm('Quiere Eliminar este alumno?') && this.alumnos) {
      this.alumnos = this.alumnoService.eliminarAlumnos(index);
      this.actualizarLista();
    }
  }
}
