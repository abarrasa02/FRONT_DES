import { Usuario } from "./usuario.model"

export interface Pedido{
    id:number
    usuario:Usuario
    total:number
    fechaPedido:Date
}