import { Component } from '@angular/core';
import { 
  IonApp, 
  IonRouterOutlet,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  MenuController,
  IonMenuButton,
  IonButtons
} from '@ionic/angular/standalone';
import { Platform } from '@ionic/angular'
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { addIcons } from 'ionicons';
import { pencilOutline, searchOutline, addOutline, trashOutline, close, menuOutline } from 'ionicons/icons';
import { StatusBar } from '@capacitor/status-bar';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonApp, 
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonButton,
    IonMenuButton,
    IonButtons
  ],
})
export class AppComponent {
  constructor(
    private menu: MenuController,
    private authService: AuthService,
    private router: Router,
    
  ) {
    addIcons({
      addOutline,
      trashOutline,
      close,
      searchOutline,
      pencilOutline,
      menuOutline
    });

    StatusBar.setOverlaysWebView({ overlay: true });  
    StatusBar.setBackgroundColor({ color: '#0e952c' }); 
    
  }

  removeFocus(event: any){
    setTimeout(() => {
      event.target.blur();
    },100);
  }

  async goTo(route: string) {
    await this.menu.close();           
    this.router.navigateByUrl('/' + route);  
  }

  async logout(){
    await this.menu.close(); 
    this.authService.logout();
  }
}
