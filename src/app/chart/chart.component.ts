import { HttpClient } from '@angular/common/http';
import { PreciosService } from './../services/precios.service';
import { Precio } from './../interfaces/precios';
import { Component } from "@angular/core";
import { Chart } from "chart.js";
import { ActivatedRoute } from "@angular/router";
import * as Highcharts from "highcharts";
import { Options } from "highcharts";



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  id: string;



  title = "app";
  chart = [];

  constructor(private precioService: PreciosService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    //obtener id de tabla
    this.id = this.activateRoute.snapshot.params['id'];
    this.precioService.setId(this.id);
    //obtener datos
    this.precioService.get().subscribe((data: Precio[]) => {
      const precios = data;
      const listaPrecios: number[] = new Array();
      precios.forEach(precio => {
        listaPrecios.push(precio.precio_total);
        console.log(precio.precio_total)
        //seccion grafica
        this.chart = new Chart("canvas", {
          type: "line",
          data: {
            labels: [listaPrecios],
            datasets: [
              {
                label: "Precio",
                data: listaPrecios,
                backgroundColor: "#a3a1dd",
                borderColor: "blue",
                borderWidth: 1
              //  fill: false
              }
            ]
          },
          options: {
            scales: {
              xAxes: [{ display: false }],
              yAxes: [{ display: true }],
            }
          }
        });
      });
    });
  }






}




/*

  constructor(private precioService: PreciosService, private activateRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.id = this.activateRoute.snapshot.params['id'];
    this.precioService.setId(this.id);
    this.precioService.obtenerLista(this.httpClient);
    this.updateData(this.precioService.getListaPrecios());
    this.precioService.vaciarLista();
  }


  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  oneToOneFlag = true;


  chartOptions: Options = {

    chart: {
      type: "spline"
    },
    xAxis: {
      categories: []
    },
    //Seccion datos.
    series: [
      {
        name: 'Producto 1',
        type: "line",
        data: []
      }
    ]

  };

  updateData(data) {
    this.chartOptions.series = [
      {
        name: 'Producto 1',
        type: "line",
        data: data
      }
    ];
  }

}

*/