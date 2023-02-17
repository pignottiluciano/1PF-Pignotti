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
import { MaterialModule } from './material.module';
import { EditAlumnoComponent } from './components/main-wrapper/edit-alumno/edit-alumno.component';
import { FormsModule } from '@angular/forms';
import { AddAlumnoComponent } from './components/main-wrapper/add-alumno/add-alumno.component';
import { CursoService } from './services/curso.service';
import { AlumnoService } from './services/alumno.service';
import { ProfesorService } from './services/profesor.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MenuComponent,
    MainWrapperComponent,
    FormularioReactivoComponent,
    MaterialComponent,
    EditAlumnoComponent,
    AddAlumnoComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [CursoService, AlumnoService, ProfesorService],
  bootstrap: [AppComponent],
})
export class AppModule {}
