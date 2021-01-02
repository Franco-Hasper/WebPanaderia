import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from './../interfaces/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }
  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/listaProductos');
  }
  // get() {
  // return this.httpClient.get( this.API_ENDPOINT+'/movies').subscribe; 
  //en caso de que no funcione borrar la linea de abajo
  // return this.httpClient.get(this.API_ENDPOINT + '/movies');
  //}
  save(producto: Producto) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT + '/listaProductos', producto, { headers: headers });
  }
}
