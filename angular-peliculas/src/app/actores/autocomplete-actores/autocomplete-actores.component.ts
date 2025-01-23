import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatAutocompleteModule,
  MatAutocompleteSelectedEvent,
} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { actorAutoCompleteDTO } from '../actores';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [
    MatAutocompleteModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatTableModule,
    MatInputModule,
    DragDropModule,
  ],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css',
})
export class AutocompleteActoresComponent {
  control = new FormControl();

  actores: actorAutoCompleteDTO[] = [
    {
      id: 1,
      nombre: 'Tom Holland',
      personaje: '',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQriHMdoN8CQFkwyMUDlYM02bMQy_1sMzWw5pwdmWC2ogI0hgiGePThWOZri-wiQd2VXwjXI25j_ZiK649ty9qbuQ',
    },
    {
      id: 2,
      nombre: 'Jack Black',
      personaje: '',
      foto: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSKe0zyjQHnOiy05CrIVop3YDrSJlZQlcjY_DOQmJe1dxAQ7ludQpbzt8K8ZwUrtUosbSFuYDu54EVueL7t5XSVfQ',
    },
    {
      id: 3,
      nombre: 'Jonah Hill',
      personaje: '',
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnc7EJ9jsjMs5ZPH0b2ZCpxKhiFBa-gNUYe8c_BL3I2WzKGb2Vy2an-AECMhb5bZBYHWcADCYHr_C6wsmJdHB5cw',
    },
  ];

  @Input({ required: true })
  actoresSeleccionados: actorAutoCompleteDTO[] = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table!: MatTable<actorAutoCompleteDTO>;

  actorSeleccionado(event: MatAutocompleteSelectedEvent) {
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');

    if (this.table != undefined) {
      this.table.renderRows();
    }
  }

  finalizarArrastre(event: CdkDragDrop<any[]>) {
    const indicePrevio = this.actoresSeleccionados.findIndex(
      (actor) => actor === event.item.data
    );
    moveItemInArray(
      this.actoresSeleccionados,
      indicePrevio,
      event.currentIndex
    );
    this.table.renderRows();
  }

  eliminar(actor: actorAutoCompleteDTO) {
    const indice = this.actoresSeleccionados.findIndex(
      (a: actorAutoCompleteDTO) => a.id === actor.id
    );
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }
}
