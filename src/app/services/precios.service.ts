import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Precio } from './../interfaces/precios';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {
  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  constructor(private httpClient: HttpClient) { }
  get() {
    return this.httpClient.get(this.API_ENDPOINT + '/listaPrecios');
  }
  // get() {
  // return this.httpClient.get( this.API_ENDPOINT+'/movies').subscribe; 
  //en caso de que no funcione borrar la linea de abajo
  // return this.httpClient.get(this.API_ENDPOINT + '/movies');
  //}
  save(precio: Precio) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.API_ENDPOINT + '/listaPrecios', precio, { headers: headers });
  }
}

/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {

  constructor() { }
}
*/