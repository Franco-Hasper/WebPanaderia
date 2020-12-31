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
    series: [
      {
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