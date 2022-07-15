import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ToolsService } from '../tools.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent implements OnInit {
  constructor(
    private ProductosService: ProductosService,
    private ToolsService: ToolsService,
    private route: ActivatedRoute
  ) {}

  private verMas: string = 'Ver mas';

  longitud = this.ToolsService.recortarString;
  productos: any = this.ProductosService.listaDeProductos;
  productoId: number;
  imagenSeleccionada: string;
  producto: any;
  precio = this.ToolsService.precio;

  mostrarId() {
    alert(this.productoId);
  }

  buscarId(array: any): any {
    for (let elemento of array) {
      if (elemento.id === this.productoId) {
        return elemento;
      }
    }
  }

  cambiarImagen(imagen) {
    this.imagenSeleccionada = imagen;
  }

  productoLink(producto: any): string {
    return '/prod/' + producto.id;
  }

  mostrarObjeto(objeto) {
    for (let producto of objeto) {
      console.log(Number(producto.precio));
    }
  }

  VerMas(): string {
    if (this.verMas == 'Ver mas') {
      this.verMas = 'Ver menos';
    }
    return this.verMas;
  }

  ngOnInit() {
    this.productoId = Number(this.route.snapshot.paramMap.get('id'));
    this.producto = this.productos.find(
      (prod) => prod.id == Number(this.productoId)
    );
    this.imagenSeleccionada = this.producto.imagen;
  }
}
