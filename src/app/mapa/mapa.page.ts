import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import * as L from 'leaflet';
import 'leaflet-draw';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class MapaPage {

  map!: L.Map;
  drawnItems!: L.FeatureGroup;

  ionViewDidEnter() {
    this.carregarMapa();
  }

  carregarMapa() {

    if (this.map) {
      this.map.remove();
    }

    this.map = L.map('map').setView([-21.2524, -48.3259], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // Grupo onde ficam os desenhos
    this.drawnItems = new L.FeatureGroup();
    this.map.addLayer(this.drawnItems);

    // Controles de desenho
    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: this.drawnItems
      },
      draw: {
        polygon: {},
        rectangle: {},
        circle: false,
        marker: false,
        polyline: false,
        circlemarker: false
      }
    });

    this.map.addControl(drawControl);

    // Evento quando desenhar
    this.map.on(L.Draw.Event.CREATED, (event: any) => {
      const layer = event.layer;
      this.drawnItems.addLayer(layer);

      const coords = layer.getLatLngs();

      console.log('Coordenadas:', coords);

      alert(JSON.stringify(coords));
    });

  }
}