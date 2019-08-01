import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
selector: 'app-taller',
templateUrl: './taller.component.html',
styleUrls: ['./taller.component.scss']
})
export class TallerComponent implements OnInit {

name = new FormControl('');
lastname = new FormControl('');
mail = new FormControl('');
password = new FormControl('');

constructor(private fb: FormBuilder) {

}

ngOnInit() {
}

updateName() {
this.name.setValue('Nancy');
}

validaDatos() {
}

}
