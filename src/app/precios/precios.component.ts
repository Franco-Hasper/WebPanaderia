import { PrecioProducto } from './../interfaces/precioProducto';
import { PrecioProductoService } from './../services/precioproducto.service';
import { Producto } from './../interfaces/productos';
import { ProductosService } from './../services/productos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css']
})
export class PreciosComponent implements OnInit {

  constructor( private precioProductoService: PrecioProductoService) { }

  precios: PrecioProducto[] = [];


  ngOnInit(): void {

    this.precioProductoService.get().subscribe((data: PrecioProducto[]) => {
      data.forEach(precio => {
        if (precio.producto.codigo_estado == 1) {
          console.log(precio.producto.codigo_estado)
          this.precios.push(precio);
        }
        //      this.productos=precio.productoid
      })
    });
    //this.precioProductoService.obtenerLista();

  }


}
