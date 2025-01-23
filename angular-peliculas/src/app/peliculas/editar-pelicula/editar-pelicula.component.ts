import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { actorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css',
})
export class EditarPeliculaComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  pelicula: PeliculaDTO = {
    id: 1,
    titulo: 'Spider-Man',
    trailer: 'ABC',
    fechaLanzamiento: new Date('2018-07-25'),
    poster:
      'https://images-cdn.ubuy.co.in/634e3c67f6511e3fcc7c57a3-2021-movie-tom-holland-spider-man-no.jpg',
  };

  generosSeleccionados: SelectorMultipleDTO[] = [{ llave: 2, valor: 'Acción' }];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 3, valor: 'Comedia' },
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [
    { llave: 2, valor: 'Open Plaza Rancagua' },
  ];
  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Agora Mall' },
    { llave: 3, valor: 'Cinemarck Rancagua' },
  ];

  actoresSeleccionados: actorAutoCompleteDTO[] = [
    {
      id: 2,
      nombre: 'Jack Black',
      personaje: 'Bowser',
      foto: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKe0zyjQHnOiy05CrIVop3YDrSJlZQlcjY_DOQmJe1dxAQ7ludQpbzt8K8ZwUrtUosbSFuYDu54EVueL7t5XSVfQ',
    },
  ];

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log('Editando película', pelicula);
  }
}
