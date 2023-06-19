import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjectResponse } from '../core/base/service/backend-service';
import { Observable } from 'rxjs';
import { Producto } from '../Admistracion/Models/producto.model';
import { carrito } from '../Admistracion/Models/carrito.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private urlApi = 'http://localhost:8080/carrito'; 
  constructor(private readonly http: HttpClient) { 
 
  }

  addProductCarrito(carrito:any):Observable<any>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.urlApi}/addCarrito`, carrito, { headers: headers });
  }

  findById(id:number):Observable<any>{
    return this.http.get<ObjectResponse<any>>(
      `${this.urlApi}/productoUser/${id}`,
    )
  }
  deleteProdcutoCarrito(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/delete/${id}`);
  }
  updateCarrito(listCarrito:Array<carrito>):Observable<any>{
    return this.http.put<any>(`${this.urlApi}/modificar`,listCarrito);
  }

 
}
