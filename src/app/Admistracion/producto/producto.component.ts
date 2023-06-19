import { Component, OnInit } from '@angular/core';
import { Producto } from '../Models/producto.model';
import { Router } from '@angular/router';
import { ProductoService } from 'src/app/Services/producto.service';
import { ObjectResponse } from 'src/app/core/base/service/backend-service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private readonly router: Router,
    private readonly productoService: ProductoService
  ) {

  }
  listProdcutos:Producto[]=[];
  idProducto:number=0;
  successMessage: string = "";
  errorMessage: string = "";
  isOpenSuccessMessage: boolean = false;
  isOpenErrorMessage: boolean = false;

  
  ngOnInit(): void {
    this.cogerProductos();
    console.log(this.listProdcutos)
  }
  

  cogerProductos(){
    this.productoService.getAllProductos().subscribe({
      next: (response: ObjectResponse<Producto[]>) => {
        if (response.success) {
          
          this.listProdcutos = response.message;
        } else {
          this.errorMessage = response.error;
          console.log(this.errorMessage)
        }
      }
    })
  }

  anadirProducto(){
    this.router.navigate(['/producto-detail'])
  }
  deleteProducto(id:number){
    this.productoService.deleteProducto(id).subscribe(
      response => {
        console.log('Producto elimanado con éxito', response);
        this.listProdcutos = [];
        this.cogerProductos();
      },
      error => {
        console.error('Error al eliminar el producto', error);
      }
    );
  }
  editarProducto(id:number){
    this.router.navigate(['/producto-detail',id])
  }
}
