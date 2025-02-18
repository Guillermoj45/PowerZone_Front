import {Routes} from '@angular/router';
import {SearchComponent} from "./Screen/search/search.component";
import {ScreenSizeGuard} from "./Guards/screen-size.guard";
import {AuthGuard} from "./Guards/auth.guard";

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
        path: 'menuoriginal',
        loadComponent: () => import('./Screen/menuoriginal/menuoriginal.component').then(m => m.MenuoriginalComponent),
        canActivate: [AuthGuard],
    },
    {
        path: 'admin',
        loadComponent: () => import('./Screen/admin/admin.component').then(m => m.AdminComponent)
    },
    {
        path: 'search',
        component: SearchComponent,
        canActivate: [ScreenSizeGuard],

    },
    {
        path: 'settings',
        loadComponent: () => import('./Screen/settings/settings.component').then((m) => m.SettingsComponent),
    },
    {
        path: 'health',
        loadComponent: () => import('./Screen/health/health.component').then((m) => m.HealthComponent),
    },
    {
        path:'recu',
        loadComponent: ()=> import('./Screen/recuperacion-previa/recuperacion-previa.component').then((m) => m.RecuperacionPreviaComponent)
    },
    {
        path: 'post-save',
        loadComponent: () => import('./Screen/post-save/post-save.component').then((m) => m.PostSaveComponent)
    },
    {
        path:'post-details/:id',
        loadComponent: ()=> import('./Screen/post-details/post-details.component').then((m) => m.PostDetailsComponent),
        canActivate: [AuthGuard],
    },
    {
        path:'posts-user/:id',
        loadComponent: ()=> import('./Screen/posts-user/posts-user.component').then((m) => m.PostsUserComponent)
    },
    {
        path: 'chat/:groupId',
        loadComponent: () => import('./Screen/rafaparaelchat/rafaparaelchat.component').then((m) => m.RafaparaelchatComponent),
    },
    {
        path: 'mensajes'
        ,loadComponent: () => import('./Screen/mensajes/mensajes.component').then((m) => m.MensajesComponent),
    },
    {
        path: 'suggestion',
        loadComponent: () => import('./Screen/suggestions/suggestions.component').then((m) => m.SuggestionsComponent),
        canActivate: [AuthGuard],
    },

];
