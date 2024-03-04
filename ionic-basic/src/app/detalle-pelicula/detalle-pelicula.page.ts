import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../service/pelicula.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.page.html',
})
export class DetallePeliculaPage implements OnInit {
  idPelicula: number = 0;
  pelicula: any;
  
  private peliculaService: PeliculaService;
    private router: Router;
    private activateRouter: ActivatedRoute;

  constructor(private servicio: PeliculaService,
    private routeador: Router,
    private rutaActiva: ActivatedRoute) {       
      this.activateRouter = rutaActiva;
      this.router = routeador;
      this.peliculaService = servicio;
    }

  ngOnInit() {
    this.activateRouter.paramMap.subscribe((paramMap: any)=>{
      this.idPelicula = Number.parseInt(paramMap.get('idPelicula'));
      this.pelicula = this.peliculaService.getPelicula(this.idPelicula);
    });
  }
}
