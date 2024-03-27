import { Component, OnInit } from '@angular/core';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { Router } from '@angular/router';
import { AutenticacionFirebaseService } from '../service/autenticacion-firebase.service';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
})
export class LogoutPage implements OnInit {

  isLogged : any = false;

  constructor(
    private authService: AutenticacionFirebaseService,
    private router: Router
  ) { 
    onAuthStateChanged(this.authService.getStateAuth(), user=> {
      if(user != null && user != undefined) {
        this.isLogged = true;
      }
    });
  }

  ngOnInit() {
  }

  onLogout() {
    signOut(this.authService.getStateAuth()).then(response=> {
      console.log("Cerró sesión!");
      this.router.navigateByUrl('/login');
    }).catch(error=> {

    });
  }
}
