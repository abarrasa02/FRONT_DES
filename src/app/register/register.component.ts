import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';
import { Usuario } from '../Admistracion/Models/usuario.model';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: Usuario = {
    id: 0,
    nombre: '',
    apellido:'',
    email:'',
    contrasena:'',
    direccion:'',
    ciudad:'',
    pais:'',
    codigoPostal:'',
    telefono:''
  };


  constructor(private readonly route:Router,
    private readonly userService:UsuarioService){

  }
  ngOnInit(): void {
    
  }

  registerUser(){
    this.userService.registerUser(this.user).subscribe(
      (response) => {
        console.log('Usuario registrado correctamente', response);
        this.route.navigate([''])
        // Aquí puedes manejar la respuesta, como mostrar un mensaje de éxito.
      },
      (error) => {
        console.error('Error al registrarse', error);
        // Aquí puedes manejar errores, como mostrar un mensaje de error.
      }
    );
  }
}
