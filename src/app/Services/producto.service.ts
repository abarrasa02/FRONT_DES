import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectResponse } from '../core/base/service/backend-service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private urlApi = 'http://localhost:8080/producto'; 
  constructor(private readonly http: HttpClient) { }


  getAllProductos():Observable<any>{
    return this.http.get<ObjectResponse<any>>(
      `${this.urlApi}/all`,
    )
}

deleteProducto(id: number): Observable<any> {
  return this.http.delete<any>(`${this.urlApi}/delete/${id}`);}

  addProdcuto(producto: any): Observable<any> {
    
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.urlApi}/add`, producto, { headers: headers });
  }

  addImagenprodcuto(imagen:File,id:number):Observable<any>{
    
    console.log(id)
    const imageFormData = new FormData();
    imageFormData.append('id',id.toString())
    imageFormData.append('image', imagen, imagen.name);
    return this.http.post<any>(`${this.urlApi}/getImage`,imageFormData);
  }
  findById(id:number):Observable<any>{
    return this.http.get<ObjectResponse<any>>(
      `${this.urlApi}/producto/${id}`,
    )
  }

  editProducto(producto:any,id:number){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.patch<any>(
      `${this.urlApi}/edit/${id}`,producto, { headers: headers });
    
  }
  filterProductoByIdCategoria(id:number){
    return this.http.get<ObjectResponse<any>>(
      `${this.urlApi}/filter/${id}`,
    )
  }
 
}
