import { Producto } from "./producto.model";
import { Usuario } from "./usuario.model";

export interface carrito{
    id:number
    usuario:Usuario
    producto:Producto
    cantidad:number
}