import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from 'src/app/Services/carrito.service';
import { Usuario } from '../Models/usuario.model';
import { carrito } from '../Models/carrito.model';
import { ObjectResponse } from 'src/app/core/base/service/backend-service';
import { Pedido } from '../Models/pedido.model';
import { DetallePedido } from '../Models/detallePedido.model';
import { PedidoService } from 'src/app/Services/pedido.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  userLog:Usuario
  listCarritoItem:carrito[]=[]
  totalPrecio:number=0;
  pedido:Pedido
  detallePedido:DetallePedido
  constructor(private readonly route:Router,
    private readonly carritoService:CarritoService,
    private readonly pedidoService:PedidoService){
      this.pedido={
        id:0,
        usuario:null,
        total:0,
        fechaPedido:null
      }
      this.detallePedido={
        id:0,
        pedido:null,
        producto:null,
        cantidad:0,
      }
      

  }
  ngOnInit(): void {
     this.getProductoCarrito();
    this.loadPaypalScript().then(() => {
      // The PayPal script is loaded, you can now initialize the PayPal button
      this.initializePaypalButton();
    });
  }
   async getProductoCarrito(){
    this.totalPrecio=0;
      if(sessionStorage.getItem('user')!=null){
        this.userLog = JSON.parse(sessionStorage.getItem('user'));
        this.carritoService.findById(this.userLog.id).subscribe({
          next: (response: ObjectResponse<carrito[]>) => {
            if (response.success) {
              this.listCarritoItem = response.message;
              this.listCarritoItem.forEach(item=>{
                this.totalPrecio+=item.producto.precio*item.cantidad;
              })
            } else {
                console.log("No hay producto en el carrito")
            }
          }
        })
      }else{
        this.route.navigate(['login']);
      }
  }

  incrementQuantity(item: carrito) {
    item.cantidad += 1;
  }

  decrementQuantity(item: carrito) {
    item.cantidad -= 1;
  }

   eliminarProdcutoCarrito(id: number) {
    this.carritoService.deleteProdcutoCarrito(id).subscribe(response=>{
      console.log('Prodcuto eliminado con éxito', response);
      this.listCarritoItem=[]
      this.getProductoCarrito();
    },
    error => {
      console.error('Error al eliminar el  producuto', error);
    })
  }

   actualizarCarrito(listCarrito: carrito[]) {
  

    this.carritoService.updateCarrito(listCarrito).subscribe(response=>{
      console.log("Carrito actualizado correctamente")
      this.getProductoCarrito();
    })
    
  }

  loadPaypalScript(): Promise<any> {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = 'https://www.paypal.com/sdk/js?client-id=test&currency=USD';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  initializePaypalButton(): void {
    (window as any).paypal.Buttons({
      createOrder: () => {
        // Implement your logic to call your server to create the order
      },
      onApprove: (data: any) => {
        // Implement your logic to call your server to capture the order
      }
    }).render('#paypal-button-container');
  }

  crearPedido(){
      this.pedido.total=this.totalPrecio;
      this.pedido.usuario=JSON.parse(sessionStorage.getItem('user'))

      this.pedidoService.addPedido(this.pedido).subscribe((response=>{
        console.log(response)
        this.listCarritoItem.forEach(item=>{
          this.detallePedido.pedido=response.message;
          this.detallePedido.producto=item.producto;
          this.detallePedido.cantidad=item.cantidad;
          this.pedidoService.addDetallePedido(this.detallePedido).subscribe((response=>{
              console.log(response.message)
          }))
        });
         this.route.navigate(['mensajepedido']);
      }))
  }
}
