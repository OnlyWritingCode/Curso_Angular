import { Component } from '@angular/core';
import { CineCreacionDTO } from '../cine';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-crear-cine',
  imports: [FormularioCinesComponent],
  templateUrl: './crear-cine.component.html',
  styleUrl: './crear-cine.component.css'
})
export class CrearCineComponent {
  guardarCambios(cine: CineCreacionDTO){
    console.log('creando cine', cine);
  }
}
