import { Injectable } from '@angular/core';
import { Pelicula } from '../interface/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  peliculas: Pelicula[]=[
    {
      id: 1, 
      nombre: 'Star Wars 4', 
      image: 'https://m.media-amazon.com/images/M/MV5BMTUzNDY0NjY4Nl5BMl5BanBnXkFtZTgwNjY4MTQ0NzE@._V1_.jpg',
      explicaciones: ["Luke se une a la Alianza.",
      "Rescata a la Princesa Leia.",
      "Destruyen la Estrella de la Muerte.", 
      "Aventura épica de bien contra mal."]
    },
    {
      id: 2, 
      nombre: 'Ghostbusters 1', 
      image: 'https://media.vanityfair.com/photos/538f20b5876f343967000028/master/pass/s-ghostbusters.jpg',
      explicaciones: ['Los Cazafantasmas luchan contra espectros.',
      'Nueva York en peligro de lo paranormal.',
      'Fantasmas atrapados en trampas ingeniosas.',
      'Los héroes salvan la ciudad.']
    },
    {
      id: 3, 
      nombre: 'Gremlins 1', 
      image: 'https://www.ecartelera.com/carteles/destacados/3000/3063.jpg',
      explicaciones: ['Gremlins se multiplican con agua.',
      'Regla: no alimentarlos después medianoche.',
      'Chaos en tranquilo pueblo, ¡hazlo bien!',
      'Pequeñas criaturas causan grandes problemas.',
      '¿Podrá la ciudad sobrevivir? ¡Esperemos!']
    },
    {
      id: 4, 
      nombre: 'Alien (1979)', 
      image: 'https://1.bp.blogspot.com/-_TENO48fFu4/UBgeVMYOZDI/AAAAAAAAJQk/o9pO-BYelVs/s1600/alien-1979.jpg',
      explicaciones: ['Nave espacial descubre señal enigmática.',
      'Criatura extraterrestre acecha en la oscuridad.',
      'Tripulación lucha por su supervivencia.',
      'Intriga, terror y ciencia ficción futurista.',
      'El peligro está en cada esquina.',
      '¿Quién sobrevivirá al horror alienígena?']
    }
  ];

  constructor() { }

  getPelicula(idPelicula: number){
    return {...this.peliculas.find(
      (pelicula: Pelicula) => {
        return pelicula.id === idPelicula
      }
    )};
  }
  getPeliculas(){
    return [...this.peliculas];
  }
}
