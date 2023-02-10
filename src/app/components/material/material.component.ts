import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Curso } from 'src/app/models/curso';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css'],
})
export class MaterialComponent {
  cursos: Curso[] = [
    {
      nombre: 'Angular',
      comision: '400',
      profesor: {
        nombre: 'Salvador',
        correo: 'Salvador@coder.com',
        fechaRegistro: new Date(2021, 0, 15),
      },
      fechaInicio: new Date(2023, 1, 22),
      FechaFin: new Date(2023, 3, 22),
      inscripcionAbierta: true,
    },
    {
      nombre: 'Vue',
      comision: '401',
      profesor: {
        nombre: 'Ezequiel',
        correo: 'Ezequiel@coder.com',
        fechaRegistro: new Date(2021, 0, 15),
      },
      fechaInicio: new Date(2023, 1, 22),
      FechaFin: new Date(2023, 3, 22),
      inscripcionAbierta: true,
    },
    {
      nombre: 'NodeJs',
      comision: '402',
      profesor: {
        nombre: 'Rodrigo',
        correo: 'Rodrigo@coder.com',
        fechaRegistro: new Date(2021, 0, 15),
      },
      fechaInicio: new Date(2023, 1, 22),
      FechaFin: new Date(2023, 3, 22),
      inscripcionAbierta: true,
    },
  ];
  dataSource: MatTableDataSource<Curso> = new MatTableDataSource<Curso>(
    this.cursos
  );
  columnas: string[] = ['nombre', 'comision', 'profesor'];
}
