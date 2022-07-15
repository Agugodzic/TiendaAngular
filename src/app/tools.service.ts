// Los metodos de este servicio estan destinados a ser reutilizables.

import { Injectable } from '@angular/core';
import { ProductosService } from './productos.service';

@Injectable()
export class ToolsService {
  constructor(private ProductosService: ProductosService) {}
  productos = this.ProductosService.listaDeProductos;

  recortarString(cadena: string, longitud: number): string {
    return cadena.substr(0, longitud);
  }
  extraerElementos(
    lista,
    indicePrimerElemento: number,
    indiceUltimoElemento: number
  ): any {
    let extraidos = [];
    for (let i = indicePrimerElemento; i <= indiceUltimoElemento; i++) {
      extraidos.push(lista[i]);
    }
    return extraidos;
  }
  menorPrecio(productos) {
    //Toma una lista de objetos que contienen la propiedad precio y los ordena de menor a mayor.
    let ordenados = productos;

    for (let i = 0; i < ordenados.length - 1; i++) {
      for (let j = 0; j < ordenados.length - i - 1; j++) {
        if (ordenados[j].precio > ordenados[j + 1].precio) {
          [ordenados[j], ordenados[j + 1]] = [ordenados[j + 1], ordenados[j]];
        }
      }
    }
    return ordenados;
  }
  mayorPrecio(productos) {
    ////Toma una lista de objetos que contienen la propiedad precio y los ordena de menor a mayor.
    let ordenados = productos;

    for (let i = 0; i < ordenados.length - 1; i++) {
      for (let j = 0; j < ordenados.length - i - 1; j++) {
        if (ordenados[j].precio < ordenados[j + 1].precio) {
          [ordenados[j], ordenados[j + 1]] = [ordenados[j + 1], ordenados[j]];
        }
      }
    }
    return ordenados;
  }
  precio(number, decimales) {
    // transforma un numero al formato precio. ej: 2889.99 a $2.889,99
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: decimales,
    }).format(number);
  }
  filtrarProductosEnLista(
    /*
    Esta funcion destinada al filtro de productos toma cinco argumentos:
     1- Una lista de objetos que contienen la propiedad producto y la propiedad marca.
     2- Un nombre o tipo de Producto.
     3- Una marca.
     4- Un valor que de coincidir con el segundo argumento desactiva el filtro producto.
     5- Un valor que de coincidir con el tercer argumento desactiva el filtro marca.
    */
    lista: any,
    filtroProducto: string,
    filtroMarca: string,
    excepcionProducto: string,
    excepcionMarca
  ): any {
    let listaFiltrada = [];
    for (let objeto of lista) {
      if (
        (objeto.producto == filtroProducto ||
          filtroProducto == excepcionProducto) &&
        (objeto.marca == filtroMarca || filtroMarca == excepcionMarca)
      ) {
        listaFiltrada.push(objeto);
      }
    }
    for (let objeto of listaFiltrada) {
      console.log(
        'producto: ' + objeto.producto + ' |  marca: ' + objeto.marca
      );
      console.log(listaFiltrada.length);
    }
    console.log(' --------------------------------------------------');
    return listaFiltrada;
  }
  generadorDeID() {}
}
