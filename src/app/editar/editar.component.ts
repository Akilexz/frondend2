import { Component, OnInit } from '@angular/core';
import { Congresos } from './../models/congreso';
import { Router } from '@angular/router';
import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNgTemplate } from '@angular/compiler';
@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  // id: any;


  respuesta: any[];
  data: any;
  tabla: string;
  congreso: Congresos [];
  // stablas: any[];
  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
};
  constructor(private http: HttpClient,
              private router: Router) { }

  ngOnInit() {

    // tslint:disable-next-line:no-unused-expression
    // this.editData();
    this.tabla = 'congreso';
    // this.tablas = ['id', 'nombre', 'direccion'];
  }
  editData = () => {
    localStorage.getItem('id');
    JSON.parse(localStorage.getItem('id'));
    console.log(this.data);
    this.data = {
      tabla: this.tabla,
      datos: this.data
    };
    this.http.put(environment.API_URL + 'put', this.data).subscribe(resultado => {
      console.log(resultado);
      this.router.navigate(['cronograma']);
    });
  }
}
