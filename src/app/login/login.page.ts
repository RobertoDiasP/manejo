import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ]
})
export class LoginPage {

  loginForm: FormGroup;
  apiUrl = 'http://104.234.30.34:5000/login'; // ajuste se necessário

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) return;

    this.http.post<any>(this.apiUrl, this.loginForm.value)
      .subscribe({
        next: (res) => {
          const token = res.access_token;

          localStorage.setItem('token', token);

          this.router.navigate(['/home']); // rota após login
        },
        error: (err) => {
          console.error(err);
          alert('Credenciais inválidas');
        }
      });
  }
}