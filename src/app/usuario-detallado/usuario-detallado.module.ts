import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UsuarioDetalladoPageRoutingModule } from './usuario-detallado-routing.module';

import { UsuarioDetalladoPage } from './usuario-detallado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UsuarioDetalladoPageRoutingModule
  ],
  declarations: [UsuarioDetalladoPage]
})
export class UsuarioDetalladoPageModule {}
