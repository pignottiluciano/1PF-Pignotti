import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MenuComponent } from './components/menu/menu.component';
import { MainWrapperComponent } from './components/main-wrapper/main-wrapper.component';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './components/material/material.component';
import {MatTableModule} from '@angular/material/table'

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    MainWrapperComponent,
    FormularioReactivoComponent,
    MaterialComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
