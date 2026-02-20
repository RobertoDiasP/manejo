import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viabilidade',
  templateUrl: './viabilidade.page.html',
  styleUrls: ['./viabilidade.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class ViabilidadePage {

  talhoes = [
    {
      id: 1,
      nome: 'Talhão 509',
      cultura: 'Soja',
      umidade: 65,
      vento: 8,
      previsaoChuva: false
    },
    {
      id: 2,
      nome: 'Talhão B3',
      cultura: 'Milho',
      umidade: 82,
      vento: 18,
      previsaoChuva: true
    },
    {
      id: 3,
      nome: 'Talhão C2',
      cultura: 'Algodão',
      umidade: 70,
      vento: 10,
      previsaoChuva: false
    }
  ];
  constructor() {
    
  }

verificarViabilidade(talhao: any): boolean {
    return (
      talhao.umidade <= 75 &&
      talhao.vento <= 15 &&
      !talhao.previsaoChuva
    );
  }

  getStatusTexto(talhao: any): string {
    return this.verificarViabilidade(talhao)
      ? 'Viável para Aplicação'
      : 'Não Viável';
  }

  getStatusColor(talhao: any): string {
    return this.verificarViabilidade(talhao)
      ? 'success'
      : 'danger';
  }
}
