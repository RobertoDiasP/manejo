import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TalhaoService } from '../services/talhao.service';

@Component({
  selector: 'app-talhao',
  templateUrl: './talhao.page.html',
  styleUrls: ['./talhao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class TalhaoPage {

  talhaoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private talhaoService: TalhaoService,
    private toastCtrl: ToastController
  ) {
    this.talhaoForm = this.fb.group({
      cultura: ['', Validators.required],
      data_plantio: ['', Validators.required],
      data_colheita: [''],
      tamanho: ['', Validators.required],
      nome_talhao: ['', Validators.required]
    });
  }

  async salvar() {

    if (this.talhaoForm.invalid) {
      this.talhaoForm.markAllAsTouched();
      return;
    }

    this.talhaoService.criarTalhao(this.talhaoForm.value).subscribe({
      next: async () => {
        const toast = await this.toastCtrl.create({
          message: 'Talhão cadastrado com sucesso',
          duration: 2000,
          color: 'success'
        });
        toast.present();
        this.talhaoForm.reset();
      },
      error: async () => {
        const toast = await this.toastCtrl.create({
          message: 'Erro ao cadastrar talhão',
          duration: 2000,
          color: 'danger'
        });
        toast.present();
      }
    });

  }

}