import { Component, OnInit } from '@angular/core';
import {InfiniteScrollCustomEvent, IonicModule} from "@ionic/angular";
import { Router, ActivatedRoute } from "@angular/router";
import { ProfileSettingsService } from '../../Service/profile-settings.service';
import { ProfileSetting } from '../../Models/ProfileSetting';
import { PostService } from '../../Service/Post.service';  // Importa el servicio de posts
import { Post } from '../../Models/Post';
import {CommonModule} from "@angular/common";  // Importa el modelo de post

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    imports: [
        IonicModule,
        CommonModule
    ],
    standalone: true
})
export class ProfileComponent implements OnInit {

    items: string[] = [];
    isHeaderHidden = false;
    private lastScrollTop = 0;
    profileId: string | null = null;
    posts: Post[] = [];  // Para almacenar los posts
    profile: ProfileSetting = {
        nickName: '',
        name: '',
        email: '',
        bornDate: '',
        avatar: ''
    };

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private profileSettings: ProfileSettingsService,
        private postService: PostService // Inyecta el servicio de posts
    ) {}

    ngOnInit() {
        this.profileId = this.route.snapshot.paramMap.get('id'); // Obtener el ID de la URL

        if (this.profileId) {
            // Cargar perfil por ID
            this.profileSettings.getProfileById(this.profileId).subscribe(
                (data: ProfileSetting) => {
                    this.profile = data;
                    console.log('Loaded profile by ID:', this.profile);
                },
                (error) => {
                    console.error('Error retrieving profile by ID:', error);
                }
            );
            this.loadPostsByUserId(this.profileId); // Cargar posts del usuario por ID
        } else {
            // Cargar perfil del usuario autenticado
            const token = sessionStorage.getItem('token');
            if (token) {
                this.profileSettings.getData(token).subscribe(
                    (data: ProfileSetting) => {
                        this.profile = data;
                        console.log('Profile data loaded:', this.profile);
                    },
                    (error) => {
                        console.error('Error retrieving profile data:', error);
                    }
                );
                this.loadPostsByCurrentUser(token); // Cargar posts del usuario autenticado
            } else {
                console.error('Token is null');
            }
        }
    }

    // Método para manejar la carga de posts
    loadPostsByUserId(userId: string) {
        const token = sessionStorage.getItem('token');
        if (token) {
            this.postService.getUserPostsById(token, userId).subscribe(
                (data: Post[]) => {
                    this.posts = data;
                    console.log('Loaded posts for user ID:', userId, this.posts);
                },
                (error) => {
                    console.error('Error retrieving posts for user ID:', error);
                    this.posts = []; // Evitar errores si la llamada falla
                }
            );
        } else {
            console.error('Token is null');
        }
    }


    loadPostsByCurrentUser(token: string) {
        this.postService.getUserPosts(token).subscribe(
            (data: Post[]) => {
                this.posts = data;
                console.log('Loaded posts for current user:', this.posts);
            },
            (error) => {
                console.error('Error retrieving posts for current user:', error);
                this.posts = []; // Evitar errores si la llamada falla
            }
        );
    }


    // Método para manejar la navegación
    navigateTo(path: string) {
        this.router.navigate([path]);
    }

    // Función para manejar el scroll infinito
    onIonInfinite(event: InfiniteScrollCustomEvent) {
        this.generateItems();
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }

    // Método privado para generar los items para el scroll infinito
    private generateItems() {
        const count = this.items.length + 1;
        for (let i = 0; i < 50; i++) {
            this.items.push(`Item ${count + i}`);
        }
    }

    // Método para manejar el scroll en el perfil
    onScroll(event: any) {
        const scrollTop = event.detail.scrollTop;

        if (scrollTop > this.lastScrollTop && scrollTop > 100) {
            this.isHeaderHidden = true;
        } else if (scrollTop < this.lastScrollTop) {
            this.isHeaderHidden = false;
        }

        this.lastScrollTop = scrollTop;
    }
}
