import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css'],
})
export class AddAlumnoComponent {
  formularioAgregar: FormGroup;

  constructor(
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

  addAlumno() {
    const newAlumno: Alumno = {
      id: this.data.length + 1,
      nombre: this.formularioAgregar.value.nombre,
      apellido: this.formularioAgregar.value.apellido,
      edad: this.formularioAgregar.value.edad,
      estado: this.formularioAgregar.value.estado,
    };
    this.data.unshift(newAlumno);
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
