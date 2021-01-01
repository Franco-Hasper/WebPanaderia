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
        data: [7.0, 6.9, 9.5, 12.5, 98.2, 21.5, 25.2, 66.5, 33.3, 98.3, 23.9, 12.6]
      },
      {
        name: 'producto 3',
        type: "line",
        data: [10, 52, 23,15, 1.2, 2.5, 2.2, 2.5, 2.3, 1.3, 1.9, 9.6]
      }
      ,
      {
        name: 'producto 4',
        type: "line",
        data: [21, 12, 3,4.5, 8.2, 21.5, 5.2, 6.5, 3.3, 8.3, 3.9, 9.6]
      }
      ,
      {
        name: 'producto 5',
        type: "line",
        data: [41, 12,43,15.5, 88.2, 28.5, 28.2, 28.5, 25.3, 16.3, 23.9, 20.6]
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