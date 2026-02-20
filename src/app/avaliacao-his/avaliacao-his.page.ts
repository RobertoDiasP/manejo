import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-avaliacao-his',
  templateUrl: './avaliacao-his.page.html',
  styleUrls: ['./avaliacao-his.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class AvaliacaoHisPage {

  avaliacoes = [
    {
      id: 1,
      avaliador: 'Talhao 509',
      nota: 5,
      comentario: '10 % - moderado',
      data: '15/02/2026'
    },
    {
      id: 2,
      avaliador: 'Talhao 512',
      nota: 4,
      comentario: '5 % - Leve',
      data: '10/02/2026'
    },
    {
      id: 3,
      avaliador: 'Talhao 350',
      nota: 3,
      comentario: '30 % - Intenso',
      data: '05/02/2026'
    }
  ];
  constructor() { }

  getStars(nota: number) {
    return Array(nota).fill(0);
  }

}
