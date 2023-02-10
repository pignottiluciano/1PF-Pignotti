import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Componentes-Pignotti';
  idMenu?: string;

  ngOnInit() {
    this.idMenu = 'inicio';
  }
}
