import { Route, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ChartComponent } from './chart/chart.component';
import { TableComponent } from './table/table.component';
import { DataTablesModule } from 'angular-datatables';
import { PreciosComponent } from './precios/precios.component';



const routes: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'grafica', component: ChartComponent },
  { path: 'grafica/:id', component: ChartComponent },
  { path: 'tabla-productos', component: TableComponent },
  {path: 'precios', component: PreciosComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ChartComponent,
    TableComponent,
    PreciosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HighchartsChartModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
