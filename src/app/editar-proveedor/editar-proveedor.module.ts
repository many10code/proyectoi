import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarProveedorPageRoutingModule } from './editar-proveedor-routing.module';

import { EditarProveedorPage } from './editar-proveedor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarProveedorPageRoutingModule
  ],
  declarations: [EditarProveedorPage]
})
export class EditarProveedorPageModule {}
