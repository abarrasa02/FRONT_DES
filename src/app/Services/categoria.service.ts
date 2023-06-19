import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BackendService, ObjectResponse } from '../core/base/service/backend-service';
import { Categoria } from '../Admistracion/Models/categoria.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriaService   {

  private urlApi = 'http://localhost:8080/categoria'; 
  constructor(private readonly http: HttpClient) { 
 
  }
 

  getAllCategorias():Observable<any>{
      return this.http.get<ObjectResponse<any>>(
        `${this.urlApi}/all`,
      )
  }
  deleteCategoria(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/eliminar/${id}`);}


    addCategoria(categoria: any): Observable<any> {
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post<any>(`${this.urlApi}/add`, categoria, { headers: headers });
    }

    findById(id:number):Observable<any>{
      return this.http.get<ObjectResponse<any>>(
        `${this.urlApi}/categoria/${id}`,
      )
    }

    addImagenCategoria(imagen:File,id:number):Observable<any>{
      const imageFormData = new FormData();
      imageFormData.append('id',id.toString())
      imageFormData.append('image', imagen, imagen.name);
      return this.http.post<any>(`${this.urlApi}/getImage`,imageFormData);
    }

    editCategoria(categoria:any,id:number){
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.patch<any>(
        `${this.urlApi}/edit/${id}`,categoria, { headers: headers });
      
    }

}
