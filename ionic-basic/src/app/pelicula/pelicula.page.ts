import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../interface/pelicula';
import { PeliculaService } from '../service/pelicula.service';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.page.html',
})
export class PeliculaPage implements OnInit {
  private peliculaService: PeliculaService;
  
  peliculas: Pelicula[]=[];

  constructor(private servicioPelicula: PeliculaService) { 
    this.peliculaService = servicioPelicula;
  }

  ngOnInit() {
    this.peliculas = this.peliculaService.getPeliculas();
  }
}
