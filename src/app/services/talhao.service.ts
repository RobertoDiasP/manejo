import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TalhaoService {

   private apiUrl = 'http://104.234.30.34:5000';

  constructor(private http: HttpClient) {}

  criarTalhao(data: any) {
    return this.http.post(`${this.apiUrl}/talhao`, data);
  }

  listarTalhao() {
    return this.http.get(`${this.apiUrl}/talhao`);
  }

  buscarTalhao(id: number) {
    return this.http.get(`${this.apiUrl}/talhao/${id}`);
  }

}