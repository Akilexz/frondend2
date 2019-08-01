import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ponencias',
  templateUrl: './ponencias.component.html',
  styleUrls: ['./ponencias.component.scss']
})
export class PonenciasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  regresar() {
    this.router.navigate(['home']);
  }
}
