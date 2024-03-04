import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasoUnoPage } from './paso-uno.page';

const routes: Routes = [
  {
    path: '',
    component: PasoUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasoUnoPageRoutingModule {}
