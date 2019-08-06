import { Imagen } from './../models/imagen';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.scss']
})
export class ImagenesComponent implements OnInit {
  base64textString: String = '';
  data: any;
  tablaImagen: string;
  imagen: Imagen;
  id2: number;
  constructor(private http: HttpClient, private router: Router, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    // this.data = {
    //   tabla: this.tablaImagen,
    //   datos: this.base64textString
    //   };
    this.imagen = {
      id: 2
    };
  }
  handleFileSelect(evt) {
    const files = evt.target.files;
    const file = files[0];
    if (files && file) {
    const reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
    }
    }
    _handleReaderLoaded(readerEvt) {
    // tslint:disable-next-line:prefer-const
    let binaryString = readerEvt.target.result;
    this.base64textString = btoa(binaryString);
    // console.log(this.base64textString);
    }
    addImage = (l: any) => {
    console.log(l);
    const tabla = 'imagenes';
    const data = { tabla: tabla, datos: [{ nombre: this.base64textString}]};
    this.http.post(environment.API_URL + 'post', data).subscribe(resultado => {
    console.log(resultado);
    // this.router.navigate(['gestion']);
    });
    }
    addImagePru = (id: number) => {
      console.log(id);
      const tabla = 'imagenesprueba';
      const data = {tabla: tabla, datos: [{id: this.imagen.id, nombre: this.base64textString}]};
      this.http.post(environment.API_URL + 'post', data).subscribe(resultado => {
        console.log(resultado);
      });
    }
}
