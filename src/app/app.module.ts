import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { ObservacionesPage } from '../pages/observaciones/observaciones';
import { HomePage } from '../pages/home/home';
import { MiCuentaPage } from '../pages/mi-cuenta/mi-cuenta';
import { HistorialPage } from '../pages/historial/historial';
import { AyudaPage } from '../pages/ayuda/ayuda';
import { MensajesPage } from '../pages/mensajes/mensajes';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistroPage,
    HomePage,
    MiCuentaPage,
    HistorialPage,
    AyudaPage,
    MensajesPage,
    ObservacionesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistroPage,
    HomePage,
    MiCuentaPage,
    HistorialPage,
    AyudaPage,
    MensajesPage,
    ObservacionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
