import { EditarComponent } from './editar/editar.component';

import { FormularioComponent } from './formulario/formulario.component';
import { PaginacionComponent } from './paginacion/paginacion.component';
import { PdfComponent } from './pdf/pdf.component';
import { CronogramaComponent } from './cronograma/cronograma.component';
import { PonenciasComponent } from './ponencias/ponencias.component';
import { InscripcionesComponent } from './inscripciones/inscripciones.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TallerComponent } from './taller/taller.component';
import { CrearComponent } from './crear/crear.component';


const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'home', component: HomeComponent},
  {path: 'inscripciones', component: InscripcionesComponent},
  {path: 'ponencias', component: PonenciasComponent},
  {path: 'taller', component: TallerComponent},
  {path: 'cronograma', component: CronogramaComponent},
  {path: 'pdf', component: PdfComponent},
  {path: 'paginacion', component: PaginacionComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
