import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MiCuentaPage } from './mi-cuenta';

@NgModule({
  declarations: [
    MiCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(MiCuentaPage),
  ],
  exports: [
    MiCuentaPage
  ]
})
export class MiCuentaPageModule {}
