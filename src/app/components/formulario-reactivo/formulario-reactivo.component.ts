import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent {

  formularioLogin: FormGroup;
  mailerror?: string;
  okEmail: boolean = false;
  errorContrasena = false;
  okContrasena = false;

  constructor(){
    // let emailRegex = '^[a-z]+@[a-z]+\\.[a-z]{2-3}$';
    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
    let controles: any = {
      correo: new FormControl('adsdsa@dasdsa.com', [Validators.required, Validators.pattern(emailRegex)]),
      contrasena: new FormControl('dasdasfdef', [Validators.minLength(5)]),
      recordarContrasena: new FormControl(false, [])
    }
    this.formularioLogin = new FormGroup(controles);
  }

  login(){
    this.mailerror = undefined;
    this.okEmail = false
    this.errorContrasena = false;
    this.okContrasena = false;
    console.log(this.formularioLogin);
    if(this.formularioLogin.controls['correo'].errors?.['pattern']){
      this.mailerror = 'No esta bien escrito';
    } else if(this.formularioLogin.controls['correo'].errors?.['required']){
      this.mailerror = 'Se requiere';
    } else{
      this.okEmail = true;
    }
    if(this.formularioLogin.controls['contrasena'].errors?.['minlength']){
      this.errorContrasena = true;
    } else{
      this.okContrasena = true;
    }
    console.log(this.mailerror, this.errorContrasena, this.okContrasena)
  }
}
