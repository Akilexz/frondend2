import { Congresos } from './../models/congreso';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.scss']
})
export class CronogramaComponent implements OnInit {
  resultado: any;
  id: number;
  [x: string]: any;
  respuesta: any[];
  data: any;
  congreso: Congresos;
  deleteCongresos: any;
  tabla: string;
  datos: any[];
  tablaSeleccionada: number;
  datoEditar: any[];
  resuestas: any[];
  idCongreso: string;
  // tslint:disable-next-line: variable-name
  table_congreso: any;
// CongresoService: any;
// congresos: Congresos[];
// tslint:disable-next-line:no-inferrable-types
p: number = 1;
  datoEliminar: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.getData();
    this.table_congreso = [
      {
        id: 'id',
        nombre: 'Nombre',
        direccion: 'Direccion'
      }
    ];
    this.congreso = {
      id: 0,
      nombre: '',
      direccion: ''
    };
    // const congreso = this.respuesta[0].congreso.id;
    // this.deleteCongresos = [{
    //   datos: this.congreso.id + 1
    // }];s
    // this.datoEditar = [this.congreso.id, this.congreso.nombre, this.congreso.direccion];
    this.tablaSeleccionada = 999;
    this.tabla = 'congreso';
    // this.id = 'id';
    this.deleteCongresos = {
      tabla: this.tabla,
      id: this.datoEliminar
    };
  }
getData = () => {
  const tabla = 'congreso';
  this.http.get<any>(environment.API_URL + `get?tabla=${tabla}`).subscribe(data => {
    this.respuesta = data.datos;
    console.log(this.respuesta);
  });
}
crear() {
 this.router.navigate(['crear']);
 }
 editar = (id: any) => {
  this.data = {
    tabla: this.tabla,
    idCongreso: id
  };
  // console.log(this.data);
  // localStorage.removeItem('id');
  localStorage.setItem('id', this.data.idCongreso.toString());
  // // const datos = {tablas: this.tabla, datos: [{id: this.congreso.id}]};
  // console.log('mensaje deseado', this.data);
  this.router.navigate(['editar']);
}
borrar = (id: number) => {
  console.log(id);
  this.data = {
    tabla: this.tabla,
    datoId: id
  };
  const httpOptions = {
        headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
    };
  console.log (this.data);
  if (this.data !== undefined) {
    this.http.post(environment.API_URL + 'delete', this.data).subscribe(resultado => {
      console.log(resultado);
      alert ('se han eliminado los datos');
        // this.router.navigate(['cronograma']);
      window.location.reload();
      });
   }

  }
}
