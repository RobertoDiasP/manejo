import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

interface Talhao {
  id: number;
  nome: string;
  infestacao: number; // percentual
  plantio: string;
}

@Component({
  selector: 'app-painel-talhao',
  templateUrl: './painel-talhao.page.html',
  styleUrls: ['./painel-talhao.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule]
})
export class PainelTalhaoPage {
  filtros: boolean = false;
  talhoes: Talhao[] = [
    { id: 1, nome: 'Talhão A', infestacao: 10, plantio: 'Soja' },
    { id: 2, nome: 'Talhão B', infestacao: 45, plantio: 'Milho' },
    { id: 3, nome: 'Talhão C', infestacao: 75, plantio: 'Algodão' },
    { id: 4, nome: 'Talhão D', infestacao: 30, plantio: 'Soja' },
    { id: 5, nome: 'Talhão E', infestacao: 85, plantio: 'Milho' },
    { id: 6, nome: 'Talhão F', infestacao: 22, plantio: 'Soja' },
    { id: 7, nome: 'Talhão G', infestacao: 38, plantio: 'Milho' },
    { id: 8, nome: 'Talhão H', infestacao: 52, plantio: 'Algodão' },
    { id: 9, nome: 'Talhão I', infestacao: 67, plantio: 'Soja' },
    { id: 10, nome: 'Talhão J', infestacao: 93, plantio: 'Milho' },
    { id: 11, nome: 'Talhão K', infestacao: 15, plantio: 'Algodão' },
    { id: 12, nome: 'Talhão L', infestacao: 41, plantio: 'Soja' },
    { id: 13, nome: 'Talhão M', infestacao: 58, plantio: 'Milho' },
    { id: 14, nome: 'Talhão N', infestacao: 79, plantio: 'Algodão' },
    { id: 15, nome: 'Talhão O', infestacao: 27, plantio: 'Soja' },
    { id: 16, nome: 'Talhão P', infestacao: 63, plantio: 'Milho' },
    { id: 17, nome: 'Talhão Q', infestacao: 88, plantio: 'Algodão' },
    { id: 18, nome: 'Talhão R', infestacao: 34, plantio: 'Soja' }
  ];

  constructor(private router: Router) { }

  getCor(infestacao: number): string {
    if (infestacao < 30) return 'success';
    if (infestacao < 70) return 'warning';
    return 'danger';
  }
  toggleFiltros() {
    this.filtros = !this.filtros;
  }
  abrirDetalhe(id: number) {
    this.router.navigate(['/talhao-detalhes', id]);
  }
}