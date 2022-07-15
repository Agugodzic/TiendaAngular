import { NgModule } from '@angular/core';
import { CarritoComponent } from './carrito/carrito.component';
import { StoreComponent } from './store/store.component';
import { BrowserModule } from '@angular/platform-browser';
import { ProductosService } from './productos.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToolsService } from './tools.service';
import { ProductoComponent } from './producto/producto.component';
import { RouterModule, Routes } from '@angular/router';

const rutas: Routes = [
  { path: 'store/:categoria', component: StoreComponent },
  { path: 'store', component: StoreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'prod/:id', component: ProductoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(rutas)],
  declarations: [
    CarritoComponent,
    StoreComponent,
    AppComponent,
    HomeComponent,
    ProductoComponent,
  ],
  bootstrap: [AppComponent],
  providers: [ProductosService, ToolsService],
})
export class AppModule {}
