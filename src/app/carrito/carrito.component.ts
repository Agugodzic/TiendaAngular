import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  constructor(
    private ProductosService: ProductosService,
    private ToolsService: ToolsService,
  ) {}
  private Productos = this.ProductosService.listaDeProductos
  productos = [this.Productos[0],this.Productos[1],this.Productos[2]]
  ngOnInit() {}
}
