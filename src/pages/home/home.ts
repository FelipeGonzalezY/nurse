import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ObservacionesPage } from '../observaciones/observaciones';
import { MensajesPage } from '../mensajes/mensajes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goObservaciones(){
    this.navCtrl.push(ObservacionesPage);
  }

  goMensajes(){
    this.navCtrl.push(MensajesPage);
  }

}
