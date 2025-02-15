import {Component, OnInit} from '@angular/core';
import {IonicModule, ToastController} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {WebsocketService} from '../../Service/websocket.service';
import {LoadingController} from '@ionic/angular/standalone';
import {addIcons} from 'ionicons';
import {arrowRedoOutline} from 'ionicons/icons';
import {Router} from '@angular/router';
import {FormsModule} from "@angular/forms";
import {ProfileService} from '../../Service/profile.service'; // Importa el ProfileService
import {CloudinaryService} from "../../Service/Cloudinary.service";

@Component({
    selector: 'app-mensajes',
    templateUrl: './mensajes.component.html',
    styleUrls: ['./mensajes.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule],
})
export class MensajesComponent implements OnInit {
    presentingElement!: HTMLElement;
    grupos: any[] = [];
    perfilesSeguidos: any[] = [];
    perfilesSeleccionados: any[] = [];
    nombreGrupo: string = '';
    imagenGrupo: File | null = null;

    constructor(
        private websocketService: WebsocketService,
        private loadingController: LoadingController,
        private toastController: ToastController,
        private router: Router,
        private profileService: ProfileService,
        private cloudinaryService: CloudinaryService
    ) {
        addIcons({ arrowRedoOutline });
    }

    ngOnInit() {
        this.presentingElement = document.querySelector('.ion-page') as HTMLElement;
        this.cargarGrupos();
    }

    formatearFecha(timestamp: string): string {
        if (!timestamp) return '';

        const fechaMensaje = new Date(timestamp);
        const ahora = new Date();
        const diferenciaHoras = (ahora.getTime() - fechaMensaje.getTime()) / (1000 * 60 * 60);

        if (diferenciaHoras < 24) {
            // Mostrar solo la hora y minutos si es reciente
            return fechaMensaje.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        } else {
            // Mostrar la fecha si ha pasado más de 24 horas
            return fechaMensaje.toLocaleDateString();
        }
    }

    async cargarGrupos(): Promise<void> {
        const loading = await this.loadingController.create({ message: 'Cargando grupos...' });
        await loading.present();

        this.websocketService.getUserGroups().subscribe({
            next: async (response) => {
                this.grupos = response.grupos || [];

                // Obtener los últimos mensajes de cada grupo
                this.websocketService.getUltimosMensajesPorGrupo().subscribe({
                    next: (mensajesResponse) => {
                        console.log('Mensajes recibidos:', mensajesResponse);
                        this.grupos.forEach(grupo => {
                            grupo.image = this.cloudinaryService.getImage(grupo.image)
                            const mensaje = mensajesResponse.find((m: any) => m.grupoId === grupo.id);
                            if (mensaje) {
                                grupo.ultimoMensaje = mensaje.ultimoMensaje || 'Sin mensajes';
                                grupo.ultimoMensajeHora = this.formatearFecha(mensaje.ultimoMensajeTimestamp);
                            } else {
                                grupo.ultimoMensaje = 'Sin mensajes';
                                grupo.ultimoMensajeHora = '';
                            }
                        });
                    },
                    error: () => {
                        this.grupos.forEach(grupo => {
                            grupo.ultimoMensaje = 'Sin mensajes';
                            grupo.ultimoMensajeHora = '';
                        });
                    }
                });

                console.log('Grupos cargados:', this.grupos);
                await loading.dismiss();
            },
            error: async (error) => {
                console.error('Error al cargar los grupos:', error);
                await loading.dismiss();
                this.mostrarToast('Error al cargar los grupos.', 'danger');
            },
        });
    }


    async mostrarPerfilesSeguidos(): Promise<void> {
        const loading = await this.loadingController.create({ message: 'Cargando perfiles...' });
        await loading.present();

        this.websocketService.getFollowingProfiles().subscribe({
            next: async (response) => {
                this.perfilesSeguidos = response.perfiles || [];
                this.perfilesSeleccionados = [];
                console.log('Perfiles seguidos:', this.perfilesSeguidos);
                await loading.dismiss();
            },
            error: async (error) => {
                console.error('Error al cargar los perfiles seguidos:', error);
                await loading.dismiss();
                this.mostrarToast('Error al cargar los perfiles seguidos.', 'danger');
            },
        });
    }

    toggleSeleccionPerfil(perfil: any): void {
        const index = this.perfilesSeleccionados.findIndex(p => p.id === perfil.id);
        if (index > -1) {
            this.perfilesSeleccionados.splice(index, 1);
        } else {
            this.perfilesSeleccionados.push(perfil);
        }
    }

    async crearGrupoConSeleccionados(): Promise<void> {
        if (!this.nombreGrupo.trim()) {
            this.mostrarToast('El nombre del grupo no puede estar vacío.', 'warning');
            return;
        }

        if (this.perfilesSeleccionados.length < 1) {
            this.mostrarToast('Debes seleccionar al menos 1 usuarios.', 'warning');
            return;
        }

        // Validar si se ha seleccionado una imagen
        if (!this.imagenGrupo) {
            this.mostrarToast('Debes elegir una foto para el grupo.', 'warning');
            return;
        }

        // Obtener el ID del usuario a través del ProfileService
        const token = sessionStorage.getItem('token'); // Asumiendo que el token está guardado en localStorage
        if (!token) {
            this.mostrarToast('No se encontró el token de autenticación.', 'danger');
            return;
        }

        const profile = await this.profileService.getProfile(token).toPromise();
        const userId = profile.id; // Asumimos que el ID está en el perfil

        if (!userId) {
            this.mostrarToast('No se encontró el ID del usuario.', 'danger');
            return;
        }

        // Agregar el ID del usuario actual a la lista de usuarios seleccionados
        this.perfilesSeleccionados.push({ id: userId });

        const loading = await this.loadingController.create({ message: 'Creando grupo...' });
        await loading.present();

        const grupoData = { name: this.nombreGrupo };

        // Crear FormData para enviar el grupo y la imagen (si existe)
        const formData = new FormData();
        formData.append('group', JSON.stringify(grupoData)); // Agregar el nombre del grupo como JSON
        if (this.imagenGrupo) { // Suponiendo que 'imagenGrupo' es el archivo de imagen seleccionado
            formData.append('file', this.imagenGrupo);
        }

        try {
            const groupName = { name: this.nombreGrupo };
            const file = this.imagenGrupo || undefined;

            const grupo = await this.websocketService.createGroup(groupName, file).toPromise();

            console.log('Grupo creado:', grupo);

            // Agregar usuarios al grupo
            const userIds = this.perfilesSeleccionados.map(p => p.id);
            const response = await this.websocketService.addUsersToGroup(grupo.id, userIds).toPromise();

            console.log('Usuarios añadidos al grupo correctamente:', response.message);
            this.mostrarToast('Grupo creado con éxito.', 'success');

            // Redirigir a la página del grupo recién creado
            this.router.navigate([`/prueba/${grupo.id}`]);

            // Cerrar el modal de loading
            await loading.dismiss();

            this.cargarGrupos();
        } catch (error) {
            console.error('Error al crear grupo o añadir usuarios:', error);
            this.mostrarToast('Error al crear grupo o añadir usuarios.', 'danger');

            // Cerrar el modal de loading si ocurre un error
            await loading.dismiss();
        }
    }

    onFileSelected(event: Event): void {
        const input = event.target as HTMLInputElement;
        if (input?.files?.length) {
            this.imagenGrupo = input.files[0]; // Asigna el archivo seleccionado
        }
    }

    crearNuevaConversacion(grupoId: string): void {
        console.log(`Crear conversación con el grupo: ${grupoId}`);
        this.mostrarPerfilesSeguidos();
    }

    verGrupo(grupoId: string): void {
        this.router.navigate([`/prueba/${grupoId}`]);
    }

    private async mostrarToast(mensaje: string, color: 'success' | 'danger' | 'warning') {
        const toast = await this.toastController.create({ message: mensaje, duration: 2000, color });
        await toast.present();
    }
}
