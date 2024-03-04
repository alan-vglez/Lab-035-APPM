import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasoDosPageRoutingModule } from './paso-dos-routing.module';

import { PasoDosPage } from './paso-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasoDosPageRoutingModule
  ],
  declarations: [PasoDosPage]
})
export class PasoDosPageModule {}
