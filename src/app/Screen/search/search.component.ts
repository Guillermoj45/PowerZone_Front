import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {ProfileService} from '../../Service/profile.service'; // Importar el servicio
import {Router} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
        NgForOf
    ]
})
export class SearchComponent implements OnInit {
    searchText: string = ''; // Campo de búsqueda
    users: any[] = []; // Lista dinámica para almacenar los perfiles encontrados

    constructor(
        private profileService: ProfileService, // Inyectar el servicio
        private router: Router
    ) {}

    ngOnInit() {}

    // Método para manejar el cambio en el campo de búsqueda
    onSearchChange() {
        if (this.searchText.trim().length > 0) {
            this.profileService.searchProfiles(this.searchText).subscribe((data) => {
                this.users = data; // Actualizar la lista de usuarios
                console.log(data)
            });
        } else {
            this.users = []; // Limpiar resultados si no hay texto
        }
    }

    // Método para redirigir al perfil del usuario
    navigateToProfile(id: number) {
        this.router.navigate([`/profile/${id}`]); // Redirige al perfil del usuario
    }

    // Método para eliminar un usuario de la lista visualmente
    removeUser(user: any) {
        this.users = this.users.filter(u => u !== user);
    }
}
