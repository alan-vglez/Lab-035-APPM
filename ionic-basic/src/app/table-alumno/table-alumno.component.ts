import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../interface/alumno';

@Component({
  selector: 'app-table-alumno',
  templateUrl: './table-alumno.component.html',
})
export class TableAlumnoComponent  implements OnInit {

  @Input() alumnosList: Alumno[]=[];
  @Output() eliminar: any = new EventEmitter<Alumno>();
  @Output() editar:  any = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {}

}
