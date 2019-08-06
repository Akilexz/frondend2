import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { Congresos } from './../models/congreso';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
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
  // clienteForm: FormGroup;
  editarForm: FormGroup;
  id: number;
  nombre: string;
  direccion: string;
  lol: FormGroup;
  // stablas: any[];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
  // id: any;
  constructor(private http: HttpClient,
              private router: Router,
              private fb: FormBuilder) { }

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
    this.formularioEdit();
  }
  formularioEdit() {
    this.editarForm = this.fb.group({
      nombre: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
  });
}
  editData = (id) => {
    const nombre = this.editarForm.get('nombre').value;
    const direccion = this.editarForm.get('direccion').value;
    this.data = {
      tabla: this.tabla,
      datoId: [ {
        id:id,
        nombre:nombre,
        direccion:direccion
      }]
    };
    if (this.data === null) {
      console.log ('no gracias');
    } else {
      console.log(this.data)
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
    const tabla = 'congreso';
    this.http.get<any>(environment.API_URL + `routebyid?tabla=${tabla}&id=` + id).subscribe(data => {
      this.respuesta = data.datos;
      console.log(this.respuesta);
      console.log(id);
      console.log(data);
    });
  }
}
// }
