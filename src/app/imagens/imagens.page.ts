import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastController, LoadingController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgZone } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation'; // <-- IMPORTAR DO CAPACITOR
import { AlertController } from '@ionic/angular';
import { IonMenuButton, IonTitle, IonContent } from '@ionic/angular/standalone';
import {
  IonItem,
  IonLabel,
  IonSelect,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonSelectOption,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonIcon,
  IonButton,
  IonProgressBar,
  IonSegment,
  IonSegmentButton,
  IonInput

} from '@ionic/angular/standalone';

@Component({
  selector: 'app-imagens',
  templateUrl: './imagens.page.html',
  styleUrls: ['./imagens.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonInput,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonMenuButton,
    IonTitle,
    IonContent,
    IonProgressBar,
    IonSegment,
    IonSegmentButton

  ]
})
export class ImagensPage {

  nomeEsV: string = '';
  registroEsV: string = '';
  obsEsV: string = '';
  abaSelecionada: string = 'esv';
  cultura: string = "";
  doenca: string = '';
  cidade: string = '';
  localizacao: string = '';
  protocolo: string = '';
  selectedFile: File | null = null;
  previewUrl: string | null = null;
  isUploading: boolean = false;
  isObtendoLocalizacao: boolean = false;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
    private alertCtrl: AlertController,
    private zone: NgZone
  ) { }


  async onFileSelected(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      this.showToast('Selecione apenas imagens');
      return;
    }

    let processedFile = file;

    if (file.size > 3 * 1024 * 1024) { // 3MB
      this.showToast('Imagem maior que 3MB, comprimindo...');
      processedFile = await this.compressImage(file);
    }

    this.selectedFile = processedFile;

    const reader = new FileReader();
    reader.onload = () => {
      this.previewUrl = reader.result as string;
    };
    reader.readAsDataURL(processedFile);
  }

  async compressImage(file: File): Promise<File> {
    return new Promise((resolve) => {
      const img = new Image();
      const reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = (event: any) => {
        img.src = event.target.result;
      };

      img.onload = () => {

        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d')!;

        // 🔥 Reduz resolução se muito grande
        const MAX_WIDTH = 1280;
        const scaleSize = MAX_WIDTH / img.width;

        canvas.width = MAX_WIDTH;
        canvas.height = img.height * scaleSize;

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 🔥 Ajusta qualidade (0.7 = 70%)
        canvas.toBlob(
          (blob) => {
            if (!blob) return resolve(file);

            const compressedFile = new File(
              [blob],
              file.name.replace(/\.\w+$/, '.jpg'),
              {
                type: 'image/jpeg',
                lastModified: Date.now(),
              }
            );

            console.log('Novo tamanho:', compressedFile.size);

            resolve(compressedFile);
          },
          'image/jpeg',
          0.7 // qualidade
        );
      };
    });
  }

  /**
   * MÉTODO PARA OBTER LOCALIZAÇÃO ATUAL (CAPACITOR)
   */
  async obterLocalizacaoAtual() {
  try {

    const position = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 10000
    });

    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // 👇 AQUI ESTÁ A CORREÇÃO
    this.zone.run(() => {
      this.localizacao = `${latitude}, ${longitude}`;
    });

    await this.buscarCidade(latitude, longitude);

    this.showToast('Localização obtida', 'success');

  } catch (error) {
    console.error(error);
    this.showToast('Erro ao obter localização', 'danger');
  }
}

  async enviarImagem() {
    if (!this.selectedFile) {
      this.showToast('Selecione uma imagem');
      return;
    }

    this.isUploading = true;

    try {
      const formData = new FormData();
      formData.append('imagem', this.selectedFile, this.selectedFile.name);

      if (this.localizacao) {
        formData.append('localizacao', this.localizacao);
      }

      if (this.protocolo) {
        formData.append('protocolo', this.protocolo);
      }

      if (this.cidade) {
        formData.append('cidade', this.cidade);
      }

      if (this.doenca) {
        formData.append('doenca', this.doenca);
      }

      if (this.cultura) {
        formData.append('cultura', this.cultura);
      }

      console.log('Log AQUI' + formData)

      this.http.post('https://croppen.org/api/imagens', formData)
        .subscribe({
          next: (response: any) => {
            console.log('Resposta:', response);

            if (response.success) {
              this.showToast('✅ Imagem enviada com sucesso!', 'success');
              this.limparFormulario();
            } else {
              this.showToast('❌ Erro: ' + (response.message || 'Falha no upload'), 'danger');
            }
            this.isUploading = false;
          },
          error: (error) => {
            console.error('Erro:', error);

            let mensagemErro = '❌ Erro ao conectar com o servidor';

            if (error.status === 0) {
              mensagemErro = '❌ Servidor não está acessível';
            } else if (error.status === 404) {
              mensagemErro = '❌ URL não encontrada';
            } else if (error.status === 422) {
              const errors = error.error?.errors;
              mensagemErro = '❌ Erro de validação: ' + (errors ? JSON.stringify(errors) : 'Dados inválidos');
            }

            this.showToast(mensagemErro, 'danger');
            this.isUploading = false;
          }
        });

    } catch (error) {
      console.error('Erro inesperado:', error);
      this.showToast('❌ Erro inesperado', 'danger');
      this.isUploading = false;
    }
  }

  limparFormulario() {
    this.localizacao = '';
    this.protocolo = '';
    this.doenca = '';
    this.cultura = '';
    this.cidade = '';
    this.selectedFile = null;
    this.previewUrl = null;
    this.isUploading = false;

    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  }

  async showToast(msg: string, color: string = 'primary') {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 3000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }

  async buscarCidade(latitude: number, longitude: number) {
  try {

    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    const response: any = await this.http.get(url).toPromise();

    if (response?.address) {

      this.zone.run(() => {
        this.cidade =
          response.address.city ||
          response.address.town ||
          response.address.village ||
          response.address.municipality ||
          '';
      });

    }

  } catch (error) {
    console.error("Erro ao buscar cidade:", error);
  }
}
}