import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectResponse } from '../core/base/service/backend-service';
@Injectable({
  providedIn: 'root'
})
export class StockService {
  private urlApi = 'http://localhost:8080/stock'; 
  constructor(private readonly http: HttpClient) { }

  
  addStock(idProducto: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.urlApi}/add/${idProducto}`, { headers: headers });
  }

  editStock(stock:any,id:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<any>(
      `${this.urlApi}/edit/${id}`,stock, { headers: headers });
    
  }

  comprobarStock(id:number,cantidad:number):Observable<any>{
    const params = new HttpParams()
      .set('idProducto', id.toString())
      .set('cantidad', cantidad.toString());
    return this.http.get<ObjectResponse<any>>(
      `${this.urlApi}/comprobar`,{params}
    )
  }

  restarStock(idProducto:number,cantidad:number){
    const params = new HttpParams()
    .set('idProducto', idProducto.toString())
    .set('cantidad', cantidad.toString());
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<any>(
      `${this.urlApi}/restarStock`,params, { headers: headers });
    
    }
}
