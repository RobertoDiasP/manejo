import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-viabilidade',
  templateUrl: './viabilidade.page.html',
  styleUrls: ['./viabilidade.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class ViabilidadePage {

  form: FormGroup;

  resultadoEsquerda: number | null = null;
  resultadoDireita: number | null = null;
  viavel: boolean | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      eficacia: ['', Validators.required],        // E
      nivelInfestacao: ['', Validators.required], // NI
      precoDiesel: ['', Validators.required],     // PD
      consumoDiesel: ['', Validators.required],   // CD
      custoProduto: ['', Validators.required],    // CP
      valorProducao: ['', Validators.required],   // VPH
      perdaPotencial: ['', Validators.required]   // PPI
    });
  }

  calcular() {
    if (!this.form.valid) {
      this.form.markAllAsTouched();
      return;
    }

    const E = this.form.value.eficacia / 100;
    const NI = this.form.value.nivelInfestacao / 100;
    const PD = Number(this.form.value.precoDiesel);
    const CD = Number(this.form.value.consumoDiesel);
    const CP = Number(this.form.value.custoProduto);
    const VPH = Number(this.form.value.valorProducao);
    const PPI = this.form.value.perdaPotencial / 100;

    // Lado esquerdo
    this.resultadoEsquerda = VPH * NI * PPI * E;

    // Lado direito
    this.resultadoDireita = (PD * CD) + CP;

    this.viavel = this.resultadoEsquerda > this.resultadoDireita;
  }

}
