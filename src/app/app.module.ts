import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';

import { ServiciosComponent } from './servicios/servicios.component';
import { ProductoComponent } from './producto/producto.component';
import { MenuNavegacionComponent } from './menu-navegacion/menu-navegacion.component';

import { RouterModule } from '@angular/router';
import { AcercaDeComponent } from './acerca-de/acerca-de.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    HomeComponent,
    AcercaDeComponent,
    ServiciosComponent,
    ProductoComponent,
    MenuNavegacionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Aca utilizamos la enrutacion de caminos
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'acercaDe', component: AcercaDeComponent },
      { path: 'contacto', component: ContactoComponent },

      { path: 'producto', component: ProductoComponent },
      { path: 'servicios', component: ServiciosComponent },
      //Redireccion automatica a home en caso de ruta comodin
      { path: '**', redirectTo: '/', pathMatch: 'full' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
