import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuarioDetalladoPage } from './usuario-detallado.page';

const routes: Routes = [
  {
    path: '',
    component: UsuarioDetalladoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuarioDetalladoPageRoutingModule {}
