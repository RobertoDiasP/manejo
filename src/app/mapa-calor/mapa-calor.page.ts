import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-mapa-calor',
  templateUrl: './mapa-calor.page.html',
  styleUrls: ['./mapa-calor.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MapaCalorPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
