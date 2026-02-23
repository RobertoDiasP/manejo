import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import * as L from 'leaflet';

@Component({
  selector: 'app-mapa-calor',
  templateUrl: './mapa-calor.page.html',
  styleUrls: ['./mapa-calor.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class MapaCalorPage {

  map!: L.Map;

  constructor() {}

  ionViewDidEnter() {
    this.carregarMapa();
  }

  carregarMapa() {

    // Evita erro se voltar para a página
    if (this.map) {
      this.map.remove();
    }

    this.map = L.map('map').setView([-21.2524, -48.3259], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    this.adicionarAreas();
  }

  adicionarAreas() {

    const areas = [
      {
        nome: 'Talhão A',
        valor: 20,
        coordenadas: [
          [-21.2524, -48.3259],
          [-21.2524, -48.3200],
          [-21.2500, -48.3200],
          [-21.2500, -48.3259]
        ]
      },
      {
        nome: 'Talhão B',
        valor: 75,
        coordenadas: [
          [-21.2550, -48.3300],
          [-21.2550, -48.3250],
          [-21.2530, -48.3250],
          [-21.2530, -48.3300]
        ]
      }
    ];

    areas.forEach(area => {

      const cor = this.getCor(area.valor);

      L.polygon(area.coordenadas as L.LatLngExpression[], {
        color: cor,
        fillColor: cor,
        fillOpacity: 0.6,
        weight: 2
      })
      .bindPopup(`<strong>${area.nome}</strong><br>Valor: ${area.valor}`)
      .addTo(this.map);

    });
  }

  getCor(valor: number): string {
    if (valor < 30) return '#2dd36f';     // verde
    if (valor < 70) return '#ffc409';     // amarelo
    return '#eb445a';                     // vermelho
  }

}