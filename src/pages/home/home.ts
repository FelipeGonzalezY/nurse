import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ObservacionesPage } from '../observaciones/observaciones';

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

}
