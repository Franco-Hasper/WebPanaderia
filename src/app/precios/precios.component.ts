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

  constructor(private precioProductoService: PrecioProductoService) {


  }



  precios: PrecioProducto[] = [];
  img: String[] = [];


  ngOnInit(): void {

    this.precioProductoService.get().subscribe((data: PrecioProducto[]) => {
      data.forEach(precio => {
        if (precio.estadoid == 1) {
          if(precio.producto.codigo_estado==1){
            this.precios.push(precio);
            this.img.push('data:image/png;base64,' + precio.producto.imagen);
          }
         
        }
      })
    });
  }
}


// image=new Image();
// this.image.src='data:image/png;base64,'+precio.producto.imagen;