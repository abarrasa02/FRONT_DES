import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CategoriaComponent } from './Admistracion/categoria/categoria.component';
import { CategoriaDetailComponent } from './Admistracion/categoria-detail/categoria-detail.component';
import { HomeComponent } from './Admistracion/home/home.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { ProductoComponent } from './Admistracion/producto/producto.component';
import { ProductoDetailComponent } from './Admistracion/producto-detail/producto-detail.component';
import { ProductoTiendaComponent } from './Admistracion/producto-tienda/producto-tienda.component';
import { CarritoComponent } from './Admistracion/carrito/carrito.component';
import { MensajePedidoComponent } from './Admistracion/mensaje-pedido/mensaje-pedido.component';
import { DetalleProductoTiendaComponent } from './Admistracion/detalle-producto-tienda/detalle-producto-tienda.component';
import { PedidosComponent } from './Admistracion/pedidos/pedidos.component';
import { PedidoComponent } from './Admistracion/pedido/pedido.component';


const routes:Routes=[
  {path:'',component:HomeComponent},
  {path: 'categoria',component:CategoriaComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'categoria-detail',component:CategoriaDetailComponent},
  {path: 'categoria-detail/:id',component:CategoriaDetailComponent},
  {path:'producto',component:ProductoComponent},
  {path:'producto-detail',component:ProductoDetailComponent},
  {path:'producto-detail/:id',component:ProductoDetailComponent},
  {path:'producto-tienda',component:ProductoTiendaComponent},
  {path:'carrito',component:CarritoComponent},
  {path:'mensajePedido',component:MensajePedidoComponent},
  {path:'detalleProducto/:id',component:DetalleProductoTiendaComponent},
  {path:'pedidos',component:PedidosComponent},
  {path:'mensajepedido',component:PedidoComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


