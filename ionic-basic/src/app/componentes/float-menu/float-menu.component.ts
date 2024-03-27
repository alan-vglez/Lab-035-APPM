import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/interface/menu';
import { AutenticacionFirebaseService } from 'src/app/service/autenticacion-firebase.service';
import { MenuService } from 'src/app/service/menu.service';
import { Subscription } from 'rxjs';
import { onAuthStateChanged } from 'firebase/auth';

@Component({
  selector: 'app-float-menu',
  templateUrl: './float-menu.component.html',
})
export class FloatMenuComponent  implements OnInit {

  datosMenu: Menu[] = [
    {nombre: 'home', enlace: '/home',
    icono: 'home-outline'},
    {nombre: 'Alumnos', enlace: '/alumnos',
    icono: 'school-outline'},
    {nombre: 'Películas', enlace: '/pelicula',
    icono: 'movie-outline'},
    {nombre: 'Presupuesto', enlace: '/presupuesto',
    icono: 'cash-outline'},
    {nombre: 'Inicio', enlace: '/paso-uno',
    icono: 'navigate-outline'},
    {nombre: 'Tabs', enlace: '/tabs',
    icono: 'folder-outline'}
  ];

  titleMenu: string='home';

  public isLogged : any = false;

  public subscription : Subscription | undefined;

  constructor(
    private authService: AutenticacionFirebaseService,
    private menuService: MenuService,
    private router: Router) { 
      this.subscription = this.menuService.$getTitleMenu.subscribe(data=> {
        console.log(data);
        this.titleMenu =data;
      });
    }
  ngOnDestroy(): void {
    if(this.subscription != null || this.subscription != undefined) {
      this.subscription.unsubscribe();
    }
  }

  ngOnInit() {}

  navegar(link: string, titleMenu: string) {
    this.titleMenu = titleMenu;
    this.router.navigate([link]);
  }

  onMenuOpen() {
    onAuthStateChanged(this.authService.getStateAuth(), user=> {
      if(user != null && user != undefined) {
        this.datosMenu =[
          {nombre: 'Alumnos', enlace: '/alumnos',
          icono: 'school-outline'},
          {nombre: 'Películas',enlace: '/pelicula',
          icono: 'movie-outline'},
          {nombre: 'inicio', enlace: '/inicio',
          icono: 'navigate-outline'},
          {nombre: 'Tabs', enlace: '/tabs',
          icono: 'folder-outline'},
          {nombre: 'login', enlace:'/login',
          icono:'log-in-outline'},
          {nombre: 'logout', enlace: '/home',
          icono: 'log-out-outline'},
          {nombre: 'home',enlace:'/home',
          icono:'home-outline'}
        ];
      } else {
          this.datosMenu =[
            {nombre: 'login', enlace:'/login',
            icono:'log-in-outline'},
            {nombre: 'logout', enlace:'/home',
            icono: 'log-out-outline'}
          ];
        }
    });
  }
}
