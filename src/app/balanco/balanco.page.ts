import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

interface Talhao {
  nome: string;
  producao: number;
  custo: number;
}

@Component({
  selector: 'app-balanco',
  templateUrl: './balanco.page.html',
  styleUrls: ['./balanco.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class BalancoPage {

  talhoes: Talhao[] = [
    { nome: 'Talhão 1', producao: 50000, custo: 30000 },
    { nome: 'Talhão 2', producao: 40000, custo: 45000 },
    { nome: 'Talhão 3', producao: 60000, custo: 35000 },
    { nome: 'Talhão 4', producao: 30000, custo: 20000 }
  ];

  calcularLucro(talhao: Talhao): number {
    return talhao.producao - talhao.custo;
  }

  get totalLucro(): number {
    return this.talhoes
      .map(t => this.calcularLucro(t))
      .reduce((acc, valor) => acc + valor, 0);
  }

}