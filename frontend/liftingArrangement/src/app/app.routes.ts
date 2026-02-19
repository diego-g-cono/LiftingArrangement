import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [

  // LOGIN
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login/login.component/login.component')
        .then(m => m.LoginComponent)
  },

  // APP PROTEGIDA
  {
    path: 'app',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./app-layout.component')
        .then(m => m.AppLayoutComponent)
  },
  
  {
  path: 'admin/shackles',
  loadComponent: () => import('./components/shackle-panel/shackle-form/shackle-form')
    .then(m => m.ShackleFormComponent)
  },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }

];
