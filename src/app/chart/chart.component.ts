import { PreciosService } from './../services/precios.service';
import { Precio } from './../interfaces/precios';
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import * as Highcharts from "highcharts";
import { Options } from "highcharts";
import { Script } from 'vm';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {
  precios: Precio[] = [];
  id: string;
  listaPrecios: number[] = [];

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

  };



  constructor(private precioService: PreciosService, private activateRoute: ActivatedRoute) {
    this.updateData([231,31,321,321,3,1]);
  }

  ngOnInit(): void {



    this.id = this.activateRoute.snapshot.params['id'];
    this.precioService.setId(this.id);
    this.precioService.get().subscribe((data: Precio[]) => {
      this.precios = data;
      this.precios.forEach(precio => {
        this.listaPrecios.push(precio.precio_total);
        console.log(this.listaPrecios);
        this.updateData(this.listaPrecios);
      });
    });
  }

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