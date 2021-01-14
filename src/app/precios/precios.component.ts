import { Producto } from './../interfaces/productos';
import { ProductosService } from './../services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  constructor(private productoService: ProductosService) { }

  productos: Producto[] = [];
  ngOnInit(): void {
    
    this.productoService.get().subscribe((data: Producto[]) => {
           this.productos = data;
      });
  }

}
