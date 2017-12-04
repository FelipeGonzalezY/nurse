import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevaDireccionPage } from './nueva-direccion';

@NgModule({
  declarations: [
    NuevaDireccionPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevaDireccionPage),
  ],
  exports: [
    NuevaDireccionPage
  ]
})
export class NuevaDireccionPageModule {}
