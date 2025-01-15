import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'menu',
    loadComponent: () => import('./menu/menu.component').then( m => m.MenuComponent)
  },
    {
        path: 'suggestions',
        loadComponent: () => import('./suggestions/suggestions.component').then( m => m.SuggestionsComponent)
    },
];
