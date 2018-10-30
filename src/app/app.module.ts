import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MapaPage } from '../pages/mapa/mapa';
import { ConsejoPage } from '../pages/consejo/consejo';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';
import {IniciarsesionPage} from '../pages/iniciarsesion/iniciarsesion';
import { AutenticacionService } from './../servicios/autenticacion.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MapaPage,
    IniciarsesionPage,
    ConsejoPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MapaPage,
    IniciarsesionPage,
    ConsejoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    AutenticacionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ],
  schemas:  [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
