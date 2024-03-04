import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../service/personajes.service';
import { Actor } from '../interface/actor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paso-uno',
  templateUrl: './paso-uno.page.html',
})
export class PasoUnoPage implements OnInit {

  user: Actor = {name:'Pedro Perez object', uuid:"34523452345234523452345", email:"correo@gmail.com"};

  list: Actor[]=
  [
    {name:'Pedro Perez 1', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {name:'Pedro Perez 2', uuid:"34523452345234523452345", email:"correo@gmail.com"},
    {name:'Pedro Perez 3', uuid:"34523452345234523452345", email:"correo@gmail.com"}
  ];

  constructor(private router: Router, private personajeService: PersonajesService) { }

  ngOnInit() {
  }

  irPasoDos(){
    this.personajeService.sendObjectSource(this.user);
    this.personajeService.sendListSource(this.list);

    this.router.navigate(['/pasoDos']);
  }

}
