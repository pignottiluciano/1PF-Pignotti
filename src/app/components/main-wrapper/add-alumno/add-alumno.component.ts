import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css'],
})
export class AddAlumnoComponent {
  formularioAgregar: FormGroup;
  alumnos!: Alumno[];

  constructor(
    private alumnoService: AlumnoService,
    public dialogRef: MatDialogRef<AddAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.formularioAgregar = new FormGroup({
      nombre: new FormControl(),
      apellido: new FormControl(),
      edad: new FormControl(),
      estado: new FormControl(),
    });
  }
  async ngOnInit(): Promise<void> {
    this.alumnos = await this.alumnoService.obtenerAlumnosPromise();
  }

  addAlumno() {
    const newAlumno: Alumno = {
      id: this.alumnos.length + 1,
      nombre: this.formularioAgregar.value.nombre,
      apellido: this.formularioAgregar.value.apellido,
      edad: this.formularioAgregar.value.edad,
      estado: this.formularioAgregar.value.estado,
    };
    console.log(newAlumno);
    this.alumnoService.agregarAlumno(newAlumno);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
