import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage),
    //canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then(m => m.RegisterPage),
    //canActivate: [AuthGuard]
  },
  {
    path: 'telas',
    loadComponent: () => import('./pages/telas/telas.page').then(m => m.TelasPage),
    //canActivate: [AuthGuard]
  },
  {
    path: 'cadastro-tela',
    loadComponent: () => import('./pages/cadastro-tela/cadastro-tela.page').then(m => m.CadastroTelaComponent),
    // canActivate: [AuthGuard]
  },
  {
    path: 'editar-tela/:id',
    loadComponent: () => import('./pages/editar-tela/editar-tela.page').then(m => m.EditarTelaPage)
  }
];
