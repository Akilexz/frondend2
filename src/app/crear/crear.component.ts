import { Congresos } from './../models/congreso';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {
  data: any;
  tabla: string;
  congreso: Congresos;

//   httpOptions = {
//     headers: new HttpHeaders({ 'Content-type': 'aplication/json' })
// };
  constructor(private http: HttpClient,
              private router: Router) { }
  ngOnInit() {
    this.congreso = {
      id: 0,
      nombre: '',
      direccion: ''
    };
    this.tabla = 'congreso';

  }
  postData = () => {
    console.log(this.congreso);
    this.data = {
      tabla: this.tabla,
      datos: this.congreso
    };
    this.http.post(environment.API_URL + 'post', this.data).subscribe(resultado => {
      console.log(resultado);
      this.router.navigate(['cronograma']);
    });
  }
}
