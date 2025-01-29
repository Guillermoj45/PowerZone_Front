import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { NgForOf } from "@angular/common";
import { addIcons } from "ionicons";
import { personAddOutline, sendSharp } from "ionicons/icons";
import { Router, ActivatedRoute } from "@angular/router";
import { ProfileSettingsService } from '../../Service/profile-settings.service';
import { ProfileSetting } from '../../Models/ProfileSetting';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
        NgForOf
    ]
})
export class ProfileComponent implements OnInit {

    items: string[] = [];
    isHeaderHidden = false;
    private lastScrollTop = 0;
    profileId: string | null = null;

    // Añadir perfil
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
        private profileSettings: ProfileSettingsService // Inyectar el servicio
    ) {
        addIcons({ personAddOutline, sendSharp });
    }

    ngOnInit() {
        this.profileId = this.route.snapshot.paramMap.get('id'); // Obtener el ID de la URL

        if (this.profileId) {
            // Cargar el perfil del usuario especificado
            this.profileSettings.getProfileById(this.profileId).subscribe(
                (data: ProfileSetting) => {
                    this.profile = data;
                    console.log('Loaded profile by ID:', this.profile);
                },
                (error) => {
                    console.error('Error retrieving profile by ID:', error);
                }
            );
        } else {
            // Cargar el perfil del usuario actual si no hay un ID en la URL
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
            } else {
                console.error('Token is null');
            }
        }

        this.generateItems();
    }



    navigateTo(path: string) {
        this.router.navigate([path]);
    }

    private generateItems() {
        const count = this.items.length + 1;
        for (let i = 0; i < 50; i++) {
            this.items.push(`Item ${count + i}`);
        }
    }

    onIonInfinite(event: InfiniteScrollCustomEvent) {
        this.generateItems();
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }

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
