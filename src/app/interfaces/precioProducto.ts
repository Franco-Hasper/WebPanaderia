import { Producto } from './productos';
export class PrecioProducto{
    id:number;
    producto :Producto;
    precio_bruto:number;
    fecha:Date;
    precio_total:number;
    codigo_iva:number;
    estadoid :number;
}