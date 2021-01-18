import { ProductosService } from './../services/productos.service';
import { Producto } from './../interfaces/productos';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  productos: Producto[] = [];

  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private productoService: ProductosService) { 
  }

  ngOnInit(): void {
    this.productoService.getSpringBoot().subscribe((data: Producto[]) => {
           this.productos = data;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }
}












// @Component({
//   selector: 'app-table',
//   templateUrl: './table.component.html',
//   styleUrls: ['./table.component.css']
// })
// export class TableComponent implements OnInit {

//   precios: Precio[];
//   constructor(private precioService: PreciosService, private httpClient: HttpClient) {
//     //  httpClient.get( this.API_ENDPOINT+'/movies').subscribe( (data:Movie[])=>{
//     //  this.movies=data;
//     // });
//     this.precioService.get().subscribe((data: Precio[]) => {
//       this.precios = data;
//     }, (error) => {
//       console.log(error);
//       alert('Ocurrio un error');
//     });
//   }

//   ngOnInit(): void {
//   }

// }
