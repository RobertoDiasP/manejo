import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class ProdutosPage {

  produtoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private produtoService: ProdutoService,
    private toastCtrl: ToastController
  ) {
    this.produtoForm = this.fb.group({
      nomeComercial: ['', Validators.required],
      nomeTecnico: ['', Validators.required],
      categoria: ['', Validators.required],
      marca: [''],
      fabricante: [''],
      fornecedor: [''],
      codigoInterno: [''],
      codigoBarras: [''],
      unidadeMedida: ['', Validators.required],
      doseHectare: ['', Validators.required],
      precoCompra: ['', Validators.required]
    });
  }

  async salvar() {
    console.log('ping1')
    if (this.produtoForm.invalid) {
      this.produtoForm.markAllAsTouched();
      return;
    } 

    this.produtoService.criarProduto(this.produtoForm.value)
      .subscribe({
        next: async () => {
          const toast = await this.toastCtrl.create({
            message: 'Produto cadastrado com sucesso!',
            duration: 2000,
            color: 'success'
          });
          await toast.present();

          this.produtoForm.reset();
        },
        error: async () => {
          const toast = await this.toastCtrl.create({
            message: 'Erro ao cadastrar produto',
            duration: 2000,
            color: 'danger'
          });
          await toast.present();
        }
      });
  }
}