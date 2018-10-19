import { Component } from '@angular/core';
import { NavController, IonicPage, Platform } from 'ionic-angular';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
/*import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment
} from '@ionic-native/google-maps';*/

declare var google;
//@IonicPage()
@Component({
  selector: 'page-mapa',
  templateUrl: 'mapa.html'
})
export class MapaPage {
map: any;
  constructor(public navCtrl: NavController, private geolocation: Geolocation) {

  }
  ionViewDidLoad(){
    this.getPosition();
  }
  getPosition():any{
  this.geolocation.getCurrentPosition().then(response => {
    this.loadMap(response);
  })
.catch(error => {
  console.log(error);
})
}
loadMap(position: Geoposition){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  console.log(latitude, longitude);

  let mapEle: HTMLElement = document.getElementById('map');
  let myLatLng = { lat: latitude, lng: longitude};
  this.map = new google.maps.Map(mapEle, {
    center: myLatLng,
    zoom: 12
  });
  google.maps.event.addListenerOnce(this.map, 'idle', () => {
    let marker = new google.maps.Marker({
      position: myLatLng,
      map: this.map,
      title: 'Hello Word!'
    });
    mapEle.classList.add('show-map');
  });
}
}
