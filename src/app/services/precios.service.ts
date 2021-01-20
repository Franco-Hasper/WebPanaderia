import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Precio } from './../interfaces/precios';

@Injectable({
  providedIn: 'root'
})
export class PreciosService {
  id: string;

  API_ENDPOINT = 'http://127.0.0.1:8000/api';
  API_ENDPOINTSPRING = 'http://127.0.0.1:8080/api';

  precios: Precio[];
  listaPrecios: number[] = new Array();

  constructor(private httpClient: HttpClient) { }



  obtenerLista(httpClient) {
    httpClient.get(this.API_ENDPOINT + "/listaPrecios/byProductoId/" + this.id).subscribe((data: Precio[]) => {
      this.precios = data;
      this.precios.forEach(precio => {
        this.listaPrecios.push(precio.precio_total);
      });
    });
  }

  vaciarLista() {
    this.listaPrecios = [];
  }
  getListaPrecios() {
    return this.listaPrecios;
  }

  setId(valor: string) {
    this.id = valor;
  }

  getSpringBoot(){
    return this.httpClient.get(this.API_ENDPOINTSPRING + '/precioproductos/'+this.id);
  }
  get() {
    return this.httpClient.get(this.API_ENDPOINT + "/listaPrecios/byProductoId/"+this.id);
  }


}
