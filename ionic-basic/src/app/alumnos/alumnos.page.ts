import { Component, OnInit } from '@angular/core';
import { Alumno } from '../interface/alumno';
import { AlumnosService } from '../service/alumnos.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.page.html',
})
export class AlumnosPage implements OnInit {

  alumnos: Alumno[]=[];
  nombre: string = '';
  matricula: string = '';
  estado: string = '';
  idActualizar: any;
  error: boolean = false;

  constructor(private alumnoService: AlumnosService) { }

  ngOnInit() {
    this.alumnoService.setAlumnos([
      {id: 1, nombre: 'Alan Vargas'
      ,matricula: '2086183'},
      {id: 2, nombre: 'Diego Vivier',
      matricula: '1984567'},
      {id: 3, nombre: 'Esteban Langarica',
      matricula: '2071813'}
    ]);

    this.alumnos = this.alumnoService.getAlumnos();
    this.estado = 'guardar';
  }


  public guardar() {
    if( (this.nombre == undefined || this.nombre == '' ) || 
      (this.matricula == undefined || this.matricula == '') ) {
      this.error = true;
      return;
    }  
    let alumno: Alumno = {
      nombre: this.nombre,
      matricula: this.matricula
    };

    if (this.estado === 'actualizar') {
      alumno.id = this.idActualizar;
      this.alumnos = this.alumnoService.actualizar(alumno);
    }
    if(this.estado === 'guardar') {
      this.alumnoService.agregarAlumno(alumno);
      this.alumnos = this.alumnoService.getAlumnos();
    }
    this.cancelar();
  }

  public cancelar() {
    this.estado = 'guardar';
    this.matricula = '';
    this.nombre = '';
    this.error = false;
  }

  public eliminar(id:number) {
    this.alumnoService.borrarAlumno(id);
    this.alumnos = this.alumnoService.getAlumnos();
  }

  public editar(alumno: Alumno) {
    this.estado = 'actualizar';
    this.matricula = alumno.matricula;
    this.nombre = alumno.nombre;
    this.idActualizar = alumno.id;
  }
}
