import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.scss']
})
export class InscripcionesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  regresar() {
    this.router.navigate(['home']);
  }

}
