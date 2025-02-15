// menu.component.ts
import {Component, OnInit} from '@angular/core';
import {IonicModule, ModalController, ModalOptions} from '@ionic/angular';
import {addIcons} from 'ionicons';
import {
    add,
    closeCircle,
    home,
    notifications,
    personCircleOutline,
    restaurant,
    search,
    settingsSharp
} from 'ionicons/icons';
import {ProfileService} from '../../Service/profile.service';
import {Router} from '@angular/router';
import {NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {NewPostComponent} from "../new-post/new-post.component";

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgForOf,
        FormsModule,
    ]
})
export class MenuComponent implements OnInit {
    query: string = '';
    profiles: any[] = [];  // Lista para almacenar los perfiles encontrados

    constructor(
        private profileService: ProfileService,
        private router: Router,
        private modalController: ModalController
    ) {
        addIcons({
            home, search, add, restaurant, notifications, closeCircle, personCircleOutline, settingsSharp
        });
    }

    ngOnInit() {}

    async openAddPostModal() {
        const modal = await this.modalController.create({
            component: NewPostComponent
        } as ModalOptions);
        await modal.present();
    }

    // Método para manejar el cambio de búsqueda
    onSearchChange() {
        if (this.query.trim().length > 0) {
            this.profileService.searchProfiles(this.query).subscribe((data) => {
                this.profiles = data;
            });
        } else {
            this.profiles = []; // Si la consulta está vacía, limpiamos los resultados
        }
    }

    // Método para redirigir al perfil de un usuario
    navigateToProfile(id: number) {
        this.router.navigate([`/profile/${id}`]); // Cambia la ruta si es necesario
    }

  LogOut() {
        sessionStorage.clear()
        this.router.navigate(['/login']);
    }
}
