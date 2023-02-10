import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  @Input()
  id?: string;

  @Output()
  idChange = new EventEmitter<string>();

  changeWrapper(type: string) {
    this.id = type;
    this.idChange.emit(type);
  }
}
