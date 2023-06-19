import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../Services/usuario.service';
import * as bcrypt from 'bcryptjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage:String="";
  isErrorMessage:boolean=false;
  usuario: string = '';
  contrasena: string = '';
constructor(private readonly router: Router,
  private readonly userService:UsuarioService) {
  
}
saltRounds=10;
ngOnInit(): void {
  sessionStorage.removeItem('user');
}

login() {
  this.userService.loginUser(this.usuario, this.contrasena).subscribe(
    (usuario: any) => {
      
      // Aquí puedes manejar la respuesta del servicio después del inicio de sesión exitoso
      usuario.message.contrasena=this.encryptPassword(usuario.message.contrasena);
      sessionStorage.setItem('user',JSON.stringify(usuario.message));
      this.router.navigate(['']); // Redirigir a la página de inicio
    },
    (error) => {
      debugger
      // Aquí puedes manejar el error en caso de inicio de sesión fallido
      this.isErrorMessage=true;
      this.errorMessage=error;
      console.error('Error al iniciar sesión', error);
      // Por ejemplo, mostrar un mensaje de error en el formulario de inicio de sesión
    }
  );
}

encryptPassword(password: string): string {
  const salt = bcrypt.genSaltSync(this.saltRounds);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
}
  register(){
      this.router.navigate(['register']);
  }
}
