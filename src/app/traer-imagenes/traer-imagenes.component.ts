import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-traer-imagenes',
  templateUrl: './traer-imagenes.component.html',
  styleUrls: ['./traer-imagenes.component.scss']
})
export class TraerImagenesComponent implements OnInit {
  respuesta: any[];

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getData();
    // this.solo();
  }
  getData = () => {
    const tabla = 'imagenesprueba';
    this.http.get<any>(environment.API_URL + `getorderbyid?tabla=${tabla}`).subscribe(data => {
      this.respuesta = data.datos;
      console.log(this.respuesta);
      // for (let i = 0; i <= data.length; i++) {
      //   // tslint:disable-next-line:no-unused-expression
      //   this.respuesta[i];
      //   console.log(this.respuesta);
      // }
    });
  }
  // solo = () => {
  //   if (this.respuesta !== undefined && this.respuesta.length > 0) {
  //     this.respuesta.forEach(element => {
  //       console.log (element);
  //       // if(this.respuesta.nombre === ValidityState.nombre) {
  //       //   return true;
  //       // }
  //     });
  //   }
  //   // return false;
  }

