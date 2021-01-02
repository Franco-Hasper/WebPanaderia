import { PreciosService } from './../services/precios.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Precio } from './../interfaces/precios';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnDestroy, OnInit {
  dtOptions: DataTables.Settings = {};
  precios: Precio[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(private precioService: PreciosService, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.precioService.get().subscribe((data: Precio[]) => {
           this.precios = data;
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
