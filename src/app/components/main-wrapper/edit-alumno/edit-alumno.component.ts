import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alumno } from 'src/app/models/alumno';

@Component({
  selector: 'app-edit-alumno',
  templateUrl: './edit-alumno.component.html',
  styleUrls: ['./edit-alumno.component.css']
})
export class EditAlumnoComponent {

  constructor(
    public dialogRef: MatDialogRef<EditAlumnoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Alumno,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
