import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../../Service/websocket.service';
import { ChatMessage } from '../../Models/ChatMessage';
import {DatePipe, NgClass, NgForOf} from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { ProfileMessenger } from "../../Models/Profile";
import { ProfileService } from "../../Service/profile.service";
import { Location } from '@angular/common';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {arrowBackOutline, send} from "ionicons/icons";

@Component({
    selector: 'app-chat',
    templateUrl: './rafaparaelchat.component.html',
    styleUrls: ['./rafaparaelchat.component.scss'],
    imports: [
        DatePipe,
        FormsModule,
        NgForOf,
        IonicModule,
        NgClass
    ],
    standalone: true
})
export class RafaparaelchatComponent implements OnInit, OnDestroy {
    messages: ChatMessage[] = [];  // Lista de mensajes
    newMessage: string = '';       // Mensaje nuevo
    senderNickname: string = '';   // Nickname del usuario
    groupId!: number;              // ID del grupo
    user?: ProfileMessenger;

    constructor(
        private websocketService: WebsocketService,
        private route: ActivatedRoute,
        private authService: AuthService,
        private profileService: ProfileService,
        private location: Location
    ) {
        addIcons({arrowBackOutline, send})
    }

    ngOnInit(): void {
        // Obtener el groupId de la URL
        this.route.paramMap.subscribe(params => {
            const groupIdParam = params.get('groupId');
            if (groupIdParam) {
                this.groupId = +groupIdParam;
                this.websocketService.connect(this.groupId.toString());

                // Llamar al servicio para obtener los mensajes del grupo
                this.websocketService.getMessagesByGroup(this.groupId).subscribe({
                    next: (messages: ChatMessage[]) => {
                        console.log("Mensajes recibidos:", messages);
                        this.messages = messages; // Cargar los mensajes en la variable
                    },
                    error: (error) => {
                        console.error('Error obteniendo mensajes del grupo:', error);
                    }
                });
            } else {
                console.error('No se encontró el groupId en la URL.');
            }
        });

        // Obtener el perfil del usuario
        const token = sessionStorage.getItem('token');
        if (token) {
            this.profileService.getProfile(token).subscribe({
                next: (profile: ProfileMessenger) => {
                    this.user = profile;
                    this.senderNickname = profile.nickName; // Asignar el nickname al usuario
                },
                error: (error) => {
                    console.error('Error obteniendo el perfil del usuario:', error);
                }
            });
        } else {
            console.error('Token no encontrado en sessionStorage.');
        }

        // Suscribirse a los mensajes entrantes (recibiendo un arreglo de mensajes)
        this.websocketService.getMessageObservable().subscribe({
            next: (messages: ChatMessage[]) => {
                this.messages = [...this.messages, ...messages];  // Agregar los mensajes nuevos a la lista existente
            },
            error: (error) => {
                console.error('Error en la recepción de mensajes:', error);
            }
        });
    }

    navigateBack() {
        window.history.back();
        setTimeout(() => location.reload(), 100);
    }


    sendMessage() {
        if (!this.newMessage.trim() || !this.user) {
            console.error('Mensaje vacío o usuario no encontrado.');
            return;
        }

        const chatMessage: ChatMessage = {
            sender: this.user.nickName,
            userId: this.user.id,
            content: this.newMessage.trim(),
            timestamp: Date.now(),
            groupId: this.groupId,
        };

        this.websocketService.sendMessage(chatMessage);  // Enviar el mensaje
        this.newMessage = '';  // Limpiar el campo de texto
    }

    ngOnDestroy() {
        this.websocketService.disconnect();
    }
}
