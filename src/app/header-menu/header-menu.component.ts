import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Usuario } from '../Admistracion/Models/usuario.model';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent  implements OnInit{
  items: MenuItem[]=[];
  userLog:boolean=false;
  userLogged:Usuario
  uLog:Boolean;
  isAdmin:boolean=false;
  constructor(private readonly router:Router){

  } 
   ngOnInit(): void {


    this.isLogged();
  }

   isLogged(){
    this.userLogged = JSON.parse(sessionStorage.getItem('user'));
    if(this.userLogged!=null){
    if(this.userLogged.email=='alejandrobaba92@gmail.com'){
      this.isAdmin=true;
    }else{
      this.isAdmin=false;
    }
    if(this.userLogged!=null){
      this.uLog=true;
    }else{
      this.uLog=false;
    }
  }
   }
  

  
  carrito(){
    this.router.navigate(['carrito']);
  }
  login(){
    this.router.navigate(['login'])
  }

  logout(){
    sessionStorage.removeItem('user');
    this.router.navigate(['login'])
  }
  register(){
    this.router.navigate(['register'])
  }


  
  categoria(){
    this.router.navigate(['categoria'])
  }
  producto(){
    this.router.navigate(['producto'])
  }
  pedidos(){
    this.router.navigate(['pedidos'])
  }
  verCatalogo(){
    this.router.navigate(['producto-tienda'])
  }
}
