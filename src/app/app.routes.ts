import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./Screen/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full',
  },
  {
    path: 'registro',
    loadComponent: () => import('./Screen/registro/registro.component').then((m) => m.RegistroComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./Screen/login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'posts',
    loadComponent: () => import('./Screen/posts/posts.component').then((m) => m.PostsComponent),
  },
    {
        path: 'notification',
        loadComponent: () => import('./Screen/notification/notification.component').then(m => m.NotificationComponent)
    },
    {
        path: 'profile',
        loadComponent: () => import('./Screen/profile/profile.component').then(m => m.ProfileComponent)
    },
    {
        path: 'chat',
        loadComponent: () => import('./Screen/chat/chat.component').then(m => m.ChatComponent)
    },
    {
        path: 'menuoriginal',
        loadComponent: () => import('./Screen/menuoriginal/menuoriginal.component').then(m => m.MenuoriginalComponent)
    },
  {
    path: 'post-details',
    loadComponent: () => import('./Screen/post-details/post-details.component').then((m) => m.PostDetailsComponent),
  },
  {
    path: 'dietas',
    loadComponent: () => import('./Screen/dietas/dietas.component').then((m) => m.DietasComponent),
  },
  {
    path: 'ejercicio',
    loadComponent: () => import('./Screen/ejercicio/ejercicio.component').then((m) => m.EjercicioComponent),
  }
];
