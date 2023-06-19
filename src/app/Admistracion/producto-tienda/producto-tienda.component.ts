import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/Services/producto.service';
import { Producto } from '../Models/producto.model';
import { ObjectResponse } from 'src/app/core/base/service/backend-service';
import { Route, Router } from '@angular/router';
import { CarritoService } from 'src/app/Services/carrito.service';
import { carrito } from '../Models/carrito.model';
import { Usuario } from '../Models/usuario.model';

@Component({
  selector: 'app-producto-tienda',
  templateUrl: './producto-tienda.component.html',
  styleUrls: ['./producto-tienda.component.scss']
})
export class ProductoTiendaComponent  implements OnInit{
  carritoItem:carrito;
  listProdcutos:Producto[]=[];
  constructor(private readonly productoService:ProductoService,
    private readonly carritoService:CarritoService,
    private readonly route:Router){
      this.carritoItem={
        id:0,
        usuario:null,
        producto:null,
        cantidad:0
      }


  }

  ngOnInit(): void {

    if(JSON.parse(sessionStorage.getItem('idCategoria'))==null){
      this.getProductos();
    }else{
        this.filterProductos();
    }
    
  }

  filterProductos(){
    this.productoService.filterProductoByIdCategoria(parseInt(sessionStorage.getItem('idCategoria'))).subscribe({
      next: (response: ObjectResponse<Producto[]>) => {
        if (response.success) {
          this.listProdcutos = response.message;
          console.log(this.listProdcutos);
        } else {
          
          console.log(response.error)
        }
      }
    })
  }
  

  getProductos(){
    this.productoService.getAllProductos().subscribe({
      next: (response: ObjectResponse<Producto[]>) => {
        if (response.success) {
          this.listProdcutos = response.message;
          console.log(this.listProdcutos);
        } else {
          
          console.log(response.error)
        }
      }
    })
  }

   addCartItem(product: Producto) {
    if(sessionStorage.getItem('user')==null){
      this.route.navigate(['/login']);
    }else{
        this.carritoItem.usuario=JSON.parse(sessionStorage.getItem('user'));
        this.carritoItem.producto=product;
        this.carritoItem.cantidad=1;
        this.carritoService.addProductCarrito(this.carritoItem).subscribe((response)=>
        {
          console.log(response.message);
        })
    }
  
  }

  detalleProducto(id:number){
      this.route.navigate(['detalleProducto/',id]);
  }
}
