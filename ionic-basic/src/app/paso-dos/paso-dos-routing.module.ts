import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasoDosPage } from './paso-dos.page';

const routes: Routes = [
  {
    path: '',
    component: PasoDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasoDosPageRoutingModule {}
