import { Component } from "@angular/core";
import * as Highcharts from "highcharts";
import { Options } from "highcharts";

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  Highcharts: typeof Highcharts = Highcharts;
  updateFlag = false;
  oneToOneFlag = true;

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
      categories: ["aqui", "el", "for", "de", "las", "fechas",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
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
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
      },
      {
        name: 'producto 2',
        type: "line",
        data: [1, 2, 3]
      }
    ]
  };
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