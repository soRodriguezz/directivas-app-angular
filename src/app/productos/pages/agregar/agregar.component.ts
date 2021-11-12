import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  colorMsg: string = 'red';
  texto: string = 'Sebastian Rodriguez';

  miFormulario: FormGroup = this._fb.group({
    nombre: ['', Validators.required],
  });

  constructor( private _fb: FormBuilder ) { }

  tieneError( campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarNombre() {
    this.texto = Math.random().toString();
  }

  cambiarColor() {

    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.colorMsg = color;
  }

}
