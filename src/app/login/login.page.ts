import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonLabel
} from '@ionic/angular/standalone';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Parse from 'parse';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel
  ]
})
export class LoginPage {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {

    // 🔹 Inicializa Parse
    Parse.initialize(
      'n5ukmCgTYPbRLSLH6pYkEhE9jukH7fHoU7SXtSRl',
      'fjGIZjMaQIklmSwvl7LWVPXB4p2sYzWGAo2abjmE'
    );

    Parse.serverURL = 'https://parseapi.back4app.com';

    this.loginForm = this.fb.group({
      email: ['',],
      senha: ['', Validators.required]
    });
  }

 async login() {

  if (this.loginForm.invalid) return;

  const { email, senha } = this.loginForm.value;

  try {

    await Parse.User.logIn(email, senha);

    this.router.navigate(['/home']);

  } catch (error) {
    alert('Credenciais inválidas');
  }
}
}