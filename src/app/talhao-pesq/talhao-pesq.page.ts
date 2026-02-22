import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ToastController } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { TalhaoService } from '../services/talhao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-talhao-pesq',
  templateUrl: './talhao-pesq.page.html',
  styleUrls: ['./talhao-pesq.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class TalhaoPesqPage {

  pesquisaForm: FormGroup;
  talhoes: any[] = [];
  pesquisou: boolean = false;

  constructor(
    private fb: FormBuilder,
    private talhaoService: TalhaoService,
    private toast: ToastController,
    private router: Router
  ) {
    this.pesquisaForm = this.fb.group({
      nome: ['']
    });
  }
  ngOnInit() {
    this.carregarTalhao();
  }

  async carregarTalhao() {
    this.talhaoService.listarTalhao().subscribe({
      next: (res: any) => {
        this.talhoes = res;
        this.pesquisou = true;
      },
      error: async () => {
        const t = await this.toast.create({
          message: 'Erro ao pesquisar talhões',
          duration: 2000,
          color: 'danger'
        });
        t.present();
      }
    });
  }

  pesquisar() {
    // const nome = this.pesquisaForm.value.nome;

    // this.talhaoService.pesquisar(nome).subscribe({
    //   next: (res: any) => {
    //     this.talhoes = res;
    //     this.pesquisou = true;
    //   },
    //   error: async () => {
    //     const t = await this.toast.create({
    //       message: 'Erro ao pesquisar talhões',
    //       duration: 2000,
    //       color: 'danger'
    //     });
    //     t.present();
    //   }
    // });
  }

  editar(id: number) {
    this.router.navigate(['/talhao', id]);
  }

  excluir(id: number) {
    console.log("ToDo")
  }
}