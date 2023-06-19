import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { PedidoService } from 'src/app/Services/pedido.service';
import { Usuario } from '../Models/usuario.model';
import { Pedido } from '../Models/pedido.model';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  userLogged:Usuario;
  listPedido:Pedido[]=[];
  userId:number=0;
  constructor(private readonly pedidoService:PedidoService,
    private readonly route:Router){
      
  }
  ngOnInit(): void {
    this.listPedido=[];
    this.userLogged=JSON.parse(sessionStorage.getItem('user'));
    this.userId=this.userLogged.id;
    console.log(this.userLogged)
    if(this.userLogged.email=="alejandrobaba92@gmail.com"){
        this.getPedidos();
    }else{
      this.getPedidosByUser();
    }
  }


  getPedidos(){
   this.pedidoService.getAllPedido().subscribe({
      next:(response)=>{
       if(response.success){
         this.listPedido=response.message
        ;
       }else{
         console.log("error")
       }
      }
     })
  }

  getPedidosByUser(){
    debugger
    this.pedidoService.getByIdUserPedido(this.userId).subscribe({
      next:(response)=>{
       if(response.success){
         this.listPedido=response.message
        ;
       }else{
         console.log("error")
       }
      }
     })
  }
}
