import { Component, Input, OnInit } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { ListadoGenericoComponent } from '../../compartidos/componentes/listado-generico/listado-generico.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listado-peliculas',
  imports: [ListadoGenericoComponent, MatButtonModule, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css',
})
export class ListadoPeliculasComponent {
  @Input({ required: true })
  peliculas!: any[];
}
