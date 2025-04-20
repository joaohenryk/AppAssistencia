import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { 
  IonContent, 
  IonLabel, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonItem, 
  IonInput, 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle,
  IonButtons,
  IonMenuButton

} from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';

@Component({

  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar,
    IonItem, 
    IonInput, 
    IonButton, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle,
    IonLabel,
    IonButtons,
    IonMenuButton
  ]
})
export class RegisterPage {
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async register() {
    try {
      await this.authService.register( this.email, this.password);
      const toast = await this.toastCtrl.create({
        message: 'Usuário cadastrado com sucesso!',
        duration: 2000,
        color: 'success'
      });
      toast.present();
      this.router.navigateByUrl('/login');
    } catch (error: any) {
      const toast = await this.toastCtrl.create({
        message: 'Erro ao cadastrar: ' + error.message,
        duration: 3000,
        color: 'danger'
      });
      toast.present();
    }
  }
}
