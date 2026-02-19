import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.page.html',
  styleUrls: ['./empresa.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule]
})
export class EmpresaPage {

  empresaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.empresaForm = this.fb.group({
      razaoSocial: ['', Validators.required],
      nomeFantasia: [''],
      cnpj: ['', [Validators.required]],
      inscricaoEstadual: [''],
      telefone: [''],
      email: ['', [Validators.email]],
      cep: [''],
      logradouro: [''],
      numero: [''],
      bairro: [''],
      cidade: [''],
      estado: ['']
    });
  }

  salvar() {
    if (this.empresaForm.valid) {
      console.log(this.empresaForm.value);
    } else {
      this.empresaForm.markAllAsTouched();
    }
  }
}
