import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'registro',
    pathMatch: 'full',
  },
  {
    path: 'registro',
    loadComponent: () => import('./registro/registro.component').then((m) => m.RegistroComponent),
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: 'posts',
    loadComponent: () => import('./posts/posts.component').then((m) => m.PostsComponent),
  },
  {
    path: 'new_post',
    loadComponent: () => import('./new-post/new-post.component').then((m) => m.NewPostComponent),
  }
];
