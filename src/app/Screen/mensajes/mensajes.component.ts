import { Component, OnInit } from '@angular/core';
import {IonicModule, ToastController} from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { WebsocketService } from '../../Service/websocket.service';
import {LoadingController} from "@ionic/angular/standalone";
import {addIcons} from "ionicons";
import {arrowRedoOutline} from "ionicons/icons";

@Component({
    selector: 'app-mensajes',
    templateUrl: './mensajes.component.html',
    styleUrls: ['./mensajes.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        CommonModule
    ]
})
export class MensajesComponent implements OnInit {
    presentingElement!: HTMLElement;
    grupos: any[] = []; // Lista de grupos del usuario

    constructor(private websocketService: WebsocketService,
                private loadingController: LoadingController,
                private toastController: ToastController) {
        addIcons({
            arrowRedoOutline
        });
    }

    ngOnInit() {
        this.presentingElement = document.querySelector('.ion-page') as HTMLElement;
        this.cargarGrupos(); // Cargar los grupos al iniciar
    }

    async cargarGrupos(): Promise<void> {
        const loading = await this.loadingController.create({
            message: 'Cargando grupos...',
        });
        await loading.present();

        this.websocketService.getUserGroups().subscribe({
            next: async (response) => {
                this.grupos = response.grupos || [];
                console.log('Grupos cargados:', this.grupos);
                await loading.dismiss();
            },
            error: async (error) => {
                console.error('Error al cargar los grupos:', error);
                await loading.dismiss();
                const toast = await this.toastController.create({
                    message: 'Error al cargar los grupos.',
                    duration: 2000,
                    color: 'danger',
                });
                await toast.present();
            }
        });
    }


    crearNuevaConversacion(grupoId: string): void {
        console.log(`Crear conversación con el grupo: ${grupoId}`);
        // Aquí puedes implementar la lógica para iniciar una conversación con el grupo seleccionado
    }
}
