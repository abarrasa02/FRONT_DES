import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../Admistracion/Models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private urlApi='http://localhost:8080/usuario'
  constructor(private readonly http: HttpClient) { }

  
  registerUser(usuario: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.urlApi}/register`, usuario, { headers: headers });
  }
  loginUser(nombre:string,contrasena:string){
    const params = {
      nombre: nombre,
      contraseña: contrasena
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Observable<Usuario>>(`${this.urlApi}/login`, { params, headers });
  }
}
