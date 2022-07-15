import { Component, Input, OnInit, VERSION } from '@angular/core';
import { ProductosService } from '../productos.service';
import { ActivatedRoute } from '@angular/router';
import { ToolsService } from '../tools.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent implements OnInit {
  constructor(
    private ToolsService: ToolsService,
    private ProductosService: ProductosService,
    private route: ActivatedRoute
  ) {}
  productoFiltro: string = 'Todos los productos';
  marcaFiltro: string = 'Todas las marcas';

  private extraerElementos = this.ToolsService.extraerElementos;
  private menorPrecio = this.ToolsService.menorPrecio;
  private mayorPrecio = this.ToolsService.mayorPrecio;
  private productosService = this.ProductosService.listaDeProductos;
  private Precio = this.ToolsService.precio;
  private filtrar = this.ToolsService.filtrarProductosEnLista;
  private productos = this.productosService;
  private categoria;
  private cantidadDePaginas = this.numerosDePagina(this.productos).length;
  private paginas = this.numerosDePagina(this.productos);

  paginaActual = 1;
  longitud = this.ToolsService.recortarString;

  private indicesPorPagina(): number {
    if (this.paginaActual == this.cantidadDePaginas) {
      return this.productos.length - 1;
    } else {
      return 10 * this.paginaActual - 1;
    }
  }
  private filtrarProductos() {
    this.productos = this.filtrar(
      this.productosService,
      this.productoFiltro,
      this.marcaFiltro,
      'Todos los productos',
      'Todas las marcas'
    );
  }
  private actualizarLista() {
    this.filtrarProductos();
    this.cantidadDePaginas = this.numerosDePagina(this.productos).length;
    this.paginas = this.numerosDePagina(this.productos);
    this.productosPaginaActual = this.extraerElementos(
      this.productos,
      10 * (this.paginaActual - 1),
      this.indicesPorPagina()
    );
    console.log(this.productosPaginaActual.length);
  }
  private generadorDeFiltro(categoria: number): string {
    if (categoria == 0) {
      return 'Todos los productos';
    }
    if (categoria == 1) {
      return 'auriculares';
    }
    if (categoria == 2) {
      return 'mouses';
    }
    if (categoria == 3) {
      return 'teclados';
    }
    if (categoria == 4) {
      return 'mousepads';
    }
    if (categoria == 5) {
      return 'monitores';
    }
  }

  productosPaginaActual = this.extraerElementos(
    this.productos,
    10 * (this.paginaActual - 1),
    this.indicesPorPagina()
  );

  productoLink(producto: any): string {
    return '/prod/' + producto.id;
  }
  cambiarProducto(producto) {
    this.productoFiltro = producto;
    this.actualizarLista();
  }
  cambiarMarca(marca) {
    this.marcaFiltro = marca;
    this.actualizarLista();
  }
  numerosDePagina(productos) {
    let listaPaginas = [1];
    let contador = 1;
    let numerosDePagina = 1;
    for (let iterador = 1; iterador < productos.length; iterador++) {
      contador++;
      if (contador > 10) {
        numerosDePagina++;
        listaPaginas.push(numerosDePagina);
        contador = 1;
      }
    }
    return listaPaginas;
  }
  get listaPaginas() {
    return this.paginas;
  }
  get precio() {
    return this.Precio;
  }
  ordenarProductos(orden) {
    if (orden === 'menorPrecio') {
      this.productosService = this.menorPrecio(this.productosService);
    } else if (orden === 'mayorPrecio') {
      this.productosService = this.mayorPrecio(this.productosService);
    }
    this.actualizarLista();
  }
  siguiente(): void {
    if (this.paginaActual < this.cantidadDePaginas) {
      this.paginaActual = this.paginaActual + 1;
      this.actualizarLista();
    }
  }
  ultimaPagina(): void {
    this.paginaActual = this.numerosDePagina(this.productos).length;
    this.actualizarLista();
  }
  anterior(): void {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.actualizarLista();
    }
  }
  primeraPagina(): void {
    this.paginaActual = 1;
    this.actualizarLista();
  }
  cambiarPagina(pagina: number): void {
    this.paginaActual = pagina;
    this.actualizarLista();
  }
  ngOnInit() {
    this.categoria = this.route.snapshot.paramMap.get('categoria');
    this.productoFiltro = this.generadorDeFiltro(this.categoria);
  }
}
