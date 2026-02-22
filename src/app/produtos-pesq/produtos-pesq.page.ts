import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos-pesq',
  templateUrl: './produtos-pesq.page.html',
  styleUrls: ['./produtos-pesq.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ProdutosPesqPage implements OnInit {

  produtos: any[] = [];
  carregando = false;
  filtros = false;
  constructor(
    private produtoService: ProdutoService,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  async carregarProdutos() {
    this.carregando = true;

    this.produtoService.PesqProduto().subscribe({
      next: (res: any) => {
        this.produtos = res;
        this.carregando = false;
      },
      error: async (err) => {
        this.carregando = false;

        const toast = await this.toastCtrl.create({
          message: 'Erro ao carregar produtos',
          duration: 2000,
          color: 'danger'
        });

        toast.present();
        console.error(err);
      }
    });
  }
  toggleFiltros() {
    this.filtros = !this.filtros;
  }
  doRefresh(event: any) {
    this.carregarProdutos();
    event.target.complete();
  }

}