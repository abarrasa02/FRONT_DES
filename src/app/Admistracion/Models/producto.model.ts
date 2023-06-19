import { Categoria } from "./categoria.model";

export interface Producto{
    id:number,
    nombre:String,
    descripcion:String,
    precio:number,
    activo:String,
    imagen:any,
    categoria:number
}