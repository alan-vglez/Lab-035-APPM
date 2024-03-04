import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasoUnoPageRoutingModule } from './paso-uno-routing.module';

import { PasoUnoPage } from './paso-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasoUnoPageRoutingModule
  ],
  declarations: [PasoUnoPage]
})
export class PasoUnoPageModule {}
