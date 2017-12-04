import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MensajePage } from './mensaje';

@NgModule({
  declarations: [
    MensajePage,
  ],
  imports: [
    IonicPageModule.forChild(MensajePage),
  ],
  exports: [
    MensajePage
  ]
})
export class MensajePageModule {}
