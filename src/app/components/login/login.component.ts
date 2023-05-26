import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  formulario: FormGroup;

  constructor(private form: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
    this.formulario = this.form.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  ingresar(){

    //Capturando los datos de entrada
    const usuario = this.formulario.value.usuario;
    const password = this.formulario.value.password;
    //Mostrando los datos
    console.log(usuario);
    console.log(password);

    if(usuario === 'asd' && password === '123'){
      this.router.navigate(['home']);
    }else{
      this.error();
    }
  }

  error(){
    this._snackBar.open('usuario o contraseña incorrectos', '', {
      duration: 2500,
      horizontalPosition: 'center',
      verticalPosition : 'top'
    })
  }
}
