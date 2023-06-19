import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectResponse } from '../core/base/service/backend-service';
import { Pedido } from '../Admistracion/Models/pedido.model';
import { DetallePedido } from '../Admistracion/Models/detallePedido.model';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {


  private urlApiPedido = 'http://localhost:8080/pedido'; 
  private urlApiDetalle = 'http://localhost:8080/detallePedido'; 
  constructor(private readonly http: HttpClient) { }


  getAllPedido():Observable<any>{
    return this.http.get<ObjectResponse<any>>(
      `${this.urlApiPedido}/getAll`,
    )   
}

getAllDetallePedido():Observable<any>{
  return this.http.get<ObjectResponse<any>>(
    `${this.urlApiDetalle}/getAll`,
  )   
}
addPedido(pedido: Pedido): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>(`${this.urlApiPedido}/add`, pedido, { headers: headers });
}
addDetallePedido(detallePedido:DetallePedido){
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  return this.http.post<any>(`${this.urlApiDetalle}/add`, detallePedido, { headers: headers });
}

getByIdUserPedido(id:number):Observable<any>{
  return this.http.get<ObjectResponse<any>>(
    `${this.urlApiPedido}/getByIdUser/${id}`,
  )
}
}
