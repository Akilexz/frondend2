import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Congresos } from './../models/congreso';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  // id: any;

  respuesta: any[];
  data: any ;
  tabla: string;
  congreso: Congresos  ;
  recuperacion: string;
  // stablas: any[];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
  // id: any;
  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {

    // tslint:disable-next-line:no-unused-expression
    // this.editData();
    this.tabla = 'congreso';
    this.congreso = {
      id: 0,
      nombre: '',
      direccion: ''
    };
    // this.tablas = ['id', 'nombre', 'direccion'];
    this.actualizar();
  }
  editData = () => {
    this.data = {
      tabla: this.tabla,
      datoId: [ this.congreso]
    };
    if (this.data === null) {
      console.log ('no gracias');
    } else {
    // tslint:disable-next-line:no-shadowed-variable
    // this.data.forEach((element) => {
      // console.log(element);
      // tslint:disable-next-line:no-conditional-assignment
      // if (element.datos.id === this.congreso.id ) {
        this.http.put(environment.API_URL + 'put', this.data).subscribe(resultado => {
          console.log(resultado);
          alert ('datos editados');
          this.router.navigate(['cronograma']);
          });
      }
    // });
  }
  actualizar() {
    const id = localStorage.getItem('id');
    console.log(id);
    // this.http.get(environment.API_URL + `get?tabla=${this.tabla}`).subscribe(resultado => {
    //   console.log(resultado);
    // });
  }
}
// }
