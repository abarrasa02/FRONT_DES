import { Component, OnInit } from '@angular/core';
import { Categoria } from '../Models/categoria.model';
import { CategoriaService } from 'src/app/Services/categoria.service';
import { ObjectResponse } from 'src/app/core/base/service/backend-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit{
 errorMessage: string="";
 ListCategorias:Categoria[]=[]
 

  constructor(  
    private readonly router: Router,
    private readonly categoriaService:CategoriaService
  ){
    
  }
 

  ngOnInit(): void {
    sessionStorage.setItem('idCategoria',null);
    this.isLogged();
    this.cogerCategorias();
  }

  isLogged(){
   
 }

   cogerCategorias(){
     this.categoriaService.getAllCategorias().subscribe({
      
        next:(response:ObjectResponse<Categoria[]>)=>{
          if(response.success){
           this.ListCategorias=response.message;
           console.log(this.ListCategorias)
          }else{
           this.errorMessage=response.error;
           console.log(this.errorMessage)
          }
        }
     })
   }
 
   filtrarCategoria(id:number){
    sessionStorage.setItem('idCategoria',JSON.stringify(id));
    this.router.navigate(['producto-tienda'])
   }
 
  
}
