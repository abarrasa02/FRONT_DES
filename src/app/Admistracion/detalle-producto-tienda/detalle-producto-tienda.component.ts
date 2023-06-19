import { Component, OnInit } from '@angular/core';
import { Producto } from '../Models/producto.model';
import { carrito } from '../Models/carrito.model';
import { ProductoService } from 'src/app/Services/producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from 'src/app/Services/carrito.service';

@Component({
  selector: 'app-detalle-producto-tienda',
  templateUrl: './detalle-producto-tienda.component.html',
  styleUrls: ['./detalle-producto-tienda.component.scss']
})
export class DetalleProductoTiendaComponent implements OnInit {

  idProducto:number=0;
  product:Producto
  carritoItem:carrito;
  constructor(
    private activatedRoute:ActivatedRoute ,
    private readonly productoService:ProductoService,
    private readonly router:Router,
    private readonly carritoService:CarritoService
    ){
      this.idProducto = Number(this.activatedRoute.snapshot.paramMap.get('id'));
      this.carritoItem={
        id:0,
        producto:null,
        cantidad:1,
        usuario:null
      }
  }
  ngOnInit(): void {
    this.getProducto();
  }

  getProducto(){
    this.productoService.findById(this.idProducto).subscribe({
      next:(response)=>{
       if(response.success){
         this.product=response.message
        ;
       }else{
         console.log("error")
       }
      }
     })
  }
  addCartItem(product: Producto) {
    if(sessionStorage.getItem('user')==null){
      this.router.navigate(['/login']);
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
}


