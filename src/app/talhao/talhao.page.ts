import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-talhao',
  templateUrl: './talhao.page.html',
  styleUrls: ['./talhao.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class TalhaoPage  {
  talhaoForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.talhaoForm = this.fb.group({
      id: ['', Validators.required],
      nome: [''],
      localidade: ['', [Validators.required]],
      descricao: [''],
      cultura: [''],
     
    });
  }

 

}
