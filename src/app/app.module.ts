
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { PonenciasComponent } from './ponencias/ponencias.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { TallerComponent } from './taller/taller.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PdfComponent } from './pdf/pdf.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { FormularioComponent } from './formulario/formulario.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InscripcionesComponent,
    PonenciasComponent,
    CronogramaComponent,
    TallerComponent,
    PdfComponent,
    PaginacionComponent,
    FormularioComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [ RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
