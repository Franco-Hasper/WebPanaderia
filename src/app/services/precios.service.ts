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

  constructor(private httpClient: HttpClient) {
  }
  setId(valor:string){
    this.id=valor;
  }

  get() {
    return this.httpClient.get(this.API_ENDPOINT + "/listaPrecios/byProductoId/"+this.id);
  }
}
