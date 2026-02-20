import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class AvaliacaoPage {

  avaliacaoForm: FormGroup;
  constructor(private fb: FormBuilder) {  
    this.avaliacaoForm = this.fb.group({
      id: ['',],
      data: ['', ],
      cultura: [''],
      talhao: [''], 
      alvo: [''],
      resultado: [''],
      observacao: ['']
    });
  }

 

}
