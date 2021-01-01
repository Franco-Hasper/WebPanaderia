export interface Precio{
    id?:number;
    productoid:number;
    precio_bruto:number;
    fecha:Date;
    precio_total:number;
    codigo_iva:number;
    estadoId?:number;
}