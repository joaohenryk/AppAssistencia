import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonButton,
  IonButtons,
  IonText,
  IonMenuButton,
  IonCard,
  IonCardHeader,
  IonCardContent,
   IonCardTitle
  

} from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar, 
    IonTitle, 
    IonContent,
    CommonModule,
    IonButton,
    IonButtons,
    IonText,
    IonButton,
    IonMenuButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle

  ],
})
export class HomePage {
  constructor(
    private authService: AuthService,
    private router: Router,
    
  ) {}

  async goTo(route: String){
    
    this.router.navigateByUrl('/' + route);
  }

  logout() {
    this.authService.logout();
  }

}
