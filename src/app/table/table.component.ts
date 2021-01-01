import { PreciosService } from './../services/precios.service';
import { Component, OnInit } from '@angular/core';
import { Precio } from './../interfaces/precios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  precios: Precio[];
  constructor(private precioService: PreciosService, private httpClient: HttpClient) {
    //  httpClient.get( this.API_ENDPOINT+'/movies').subscribe( (data:Movie[])=>{
    //  this.movies=data;
    // });
    this.precioService.get().subscribe((data: Precio[]) => {
      this.precios = data;
    }, (error) => {
      console.log(error);
      alert('Ocurrio un error');
    });
  }

  ngOnInit(): void {
  }

}
