import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
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

  salvar() {
    if (this.produtoForm.valid) {
      console.log(this.produtoForm.value);
    } else {
      this.produtoForm.markAllAsTouched();
    }
  }

}
