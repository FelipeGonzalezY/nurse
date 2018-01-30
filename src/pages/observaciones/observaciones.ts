import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoPacientePage } from '../nuevo-paciente/nuevo-paciente';
import { NuevaDireccionPage } from '../nueva-direccion/nueva-direccion';

/**
 * Generated class for the ObservacionesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-observaciones',
  templateUrl: 'observaciones.html',
})
export class ObservacionesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObservacionesPage');
  }

  addPaciente(){
    this.navCtrl.push(NuevoPacientePage);
  }

  addDireccion(){
    this.navCtrl.push(NuevaDireccionPage);
  }

}
