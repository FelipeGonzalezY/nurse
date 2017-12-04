import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPerfilPage } from './edit-perfil';

@NgModule({
  declarations: [
    EditPerfilPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPerfilPage),
  ],
  exports: [
    EditPerfilPage
  ]
})
export class EditPerfilPageModule {}
