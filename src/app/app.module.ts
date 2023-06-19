import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductoComponent } from './Admistracion/producto/producto.component';
import { ProductoDetailComponent } from './Admistracion/producto-detail/producto-detail.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { CategoriaComponent } from './Admistracion/categoria/categoria.component';
import { CategoriaDetailComponent } from './Admistracion/categoria-detail/categoria-detail.component';
import { HomeComponent } from './Admistracion/home/home.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown'
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from 'primeng/fileupload';
import { ProductoTiendaComponent } from './Admistracion/producto-tienda/producto-tienda.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CarritoComponent } from './Admistracion/carrito/carrito.component';
import { PedidoComponent } from './Admistracion/pedido/pedido.component';
import { MensajePedidoComponent } from './Admistracion/mensaje-pedido/mensaje-pedido.component';
import { DetalleProductoTiendaComponent } from './Admistracion/detalle-producto-tienda/detalle-producto-tienda.component';
import { PedidosComponent } from './Admistracion/pedidos/pedidos.component';
import { FooterComponent } from './Admistracion/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProductoComponent,
    ProductoDetailComponent,
    HeaderMenuComponent,
    AppLayoutComponent,
    CategoriaComponent,
    CategoriaDetailComponent,
    HomeComponent,
    ProductoTiendaComponent,
    CarritoComponent,
    PedidoComponent,
    MensajePedidoComponent,
    DetalleProductoTiendaComponent,
    PedidosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    MenubarModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    FileUploadModule,
    BrowserAnimationsModule
  
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
