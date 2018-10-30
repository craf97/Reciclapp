import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MapaPage } from '../pages/mapa/mapa';
import { ConsejoPage } from '../pages/consejo/consejo';
import firebase from 'firebase';
import { IniciarsesionPage } from '../pages/iniciarsesion/iniciarsesion';
import {AutenticacionService} from './../servicios/autenticacion.service';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  homepage=HomePage;
  iniciarSesion=IniciarsesionPage;
  @ViewChild('contenido') contenido:NavController;
  @ViewChild(Nav) nav: Nav;
  usuarioEstaConectado= false;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
              public menuCtrl: MenuController,
              public autenticacionService: AutenticacionService) {
  //  this.initializeApp();

    // used for an example of ngFor and navigation
    /*platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });*/
    firebase.initializeApp({
      apiKey: "AIzaSyClkZJtuuM8V9-ZK-9J6WSb0aCY7lfOJSE",
      authDomain: "ingreso-59461.firebaseapp.com",
    });
    firebase.auth().onAuthStateChanged(
      usuario=>{
        if(usuario!=null){
          this.usuarioEstaConectado= true;
            this.contenido.setRoot(this.homepage);
        }
        else{
          this.usuarioEstaConectado= false;
            this.contenido.setRoot(this.iniciarSesion);
        }
      }
    )
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  llamarPagina(pagina){
    this.contenido.setRoot(pagina);
    this.menuCtrl.close();
  }
  terminarSesion(){
    this.autenticacionService.terminarSesion();
    this.menuCtrl.close();
  }
  llamarConsejos(){
    this.contenido.setRoot(ConsejoPage);
    this.menuCtrl.close();
  }
  llamarMateria(){
    this.contenido.setRoot(ListPage);
    this.menuCtrl.close();
  }
  llamarMapa(){
    this.contenido.setRoot(MapaPage);
    this.menuCtrl.close();
  }
}
