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
        path: 'profile/:id',
        loadComponent: () => import('./Screen/profile/profile.component').then(m => m.ProfileComponent)
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
        path: 'admin',
        loadComponent: () => import('./Screen/admin/admin.component').then(m => m.AdminComponent)
    },

    {
        path: 'search',
        loadComponent: () => import('./Screen/search/search.component').then((m) => m.SearchComponent),
    },
    {
        path: 'settings',
        loadComponent: () => import('./Screen/settings/settings.component').then((m) => m.SettingsComponent),
    },
    {
        path: 'dietas',
        loadComponent: () => import('./Screen/dietas/dietas.component').then((m) => m.DietasComponent),
    },
    {
        path: 'health',
        loadComponent: () => import('./Screen/health/health.component').then((m) => m.HealthComponent),
    },
    {
        path:'recu',
        loadComponent: ()=> import('./Screen/recuperacion-previa/recuperacion-previa.component').then((m) => m.RecuperacionPreviaComponent)
    }
];
