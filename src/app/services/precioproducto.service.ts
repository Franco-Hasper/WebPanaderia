import { Producto } from './../interfaces/productos';
import { Precio } from './../interfaces/precios';
import { PrecioProducto } from './../interfaces/precioProducto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrecioProductoService {

  constructor(private httpClient: HttpClient) { }


  API_ENDPOINTSPRING = 'http://127.0.0.1:8080/api';

  get(){
    return this.httpClient.get(this.API_ENDPOINTSPRING + '/precioproductos');
  }

}
/*
  obtenerLista() {
    this.httpClient.get(this.API_ENDPOINTSPRING + "/precioproductos").subscribe((data: PrecioProducto[]) => {
       //  console.log(data[0].producto)
      data.forEach(precio => {
        console.log(precio.producto.nombre)
        //      this.productos=precio.productoid
      })

    });
  }
  */ 