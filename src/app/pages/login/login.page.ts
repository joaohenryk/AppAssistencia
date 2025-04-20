import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { IonicModule, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      this.router.navigateByUrl('/home');
    } catch (error: any) {
      const toast = await this.toastCtrl.create({
        message: 'Email ou senha inválidos',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }
}
