import { HttpClient } from '@angular/common/http';
import { PreciosService } from './../services/precios.service';
import { Precio } from './../interfaces/precios';
import { Component } from "@angular/core";
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

  constructor(private precioService: PreciosService, private activateRoute: ActivatedRoute, private httpClient: HttpClient) {
    this.id = this.activateRoute.snapshot.params['id'];
    this.precioService.setId(this.id);
    this.precioService.obtenerLista(httpClient);
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


/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/

/*
Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  oneToOneFlag = true;
  //Ir a cualquier ejemplo, buscar JS archivo y copiar desde chart:{}
  // reemplazar aqui para obtener el ejemplo
  chartOptions: Options = {
    chart: {
      type: "spline"
    },
    title: {
      text: "Historial de Precios Producto"
    },
    subtitle: {
      text: "Aqui un resultado ej Pan"
    },
    xAxis: {
      categories: [      ]
    },
    yAxis: {
      title: {
        text: "Precio $"
      }
    },
    tooltip: {
      valueSuffix: " $"
    },
    //Seccion datos.
    series: [
      {
        name: 'Producto 1',
        type: "line",
        data: []
      }
    ]

  };*/