import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../../Service/websocket.service';
import { ChatMessage } from '../../Models/ChatMessage';
import { DatePipe, NgForOf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import {ProfileMessenger} from "../../Models/Profile";
import {ProfileService} from "../../Service/profile.service";

@Component({
    selector: 'app-chat',
    templateUrl: './rafaparaelchat.component.html',
    styleUrls: ['./rafaparaelchat.component.scss'],
    imports: [
        DatePipe,
        FormsModule,
        NgForOf
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
        private profileService:ProfileService
    ) {}

    ngOnInit(): void {
        // Obtener el groupId de la URL
        this.route.paramMap.subscribe(params => {
            this.groupId = +params.get('groupId')!;
            this.websocketService.connect(this.groupId.toString());
        });

        // Obtener el nickname del usuario
        const token = sessionStorage.getItem('token');
        console.log("token",token)
        this.profileService.getProfile(token!).subscribe({
           next: (profile:ProfileMessenger) => {
                console.log("profile",profile)
               this.user = profile
               console.log("usuario",this.user);
           },
            error: (error) => {
                 console.error('Error fetching profile:', error);
            }
        });
        console.log("usuario",this.user);
        if (this.user && this.user.nickName) {
            this.senderNickname = this.user.nickName;
        } else {
            console.error('No se ha encontrado el nickname del usuario.');
        }

        // Escuchar mensajes entrantes
        this.websocketService.getMessageObservable().subscribe((messages) => {
            if (messages) {
                this.messages = messages;  // Actualizar la lista de mensajes
            }
        });
    }

    sendMessage() {
        if (this.newMessage.trim()) {

            console.log("usuario",this.user);
            if (!this.user) {
                console.error('No se ha encontrado el usuario.');
                return;
            }

            const chatMessage: ChatMessage = {
                sender: this.user.nickName,
                userId: this.user.id,
                content: this.newMessage,
                timestamp: Date.now(),
                groupId: this.groupId,
            };

            this.websocketService.sendMessage(chatMessage);  // Enviar el mensaje
            this.newMessage = '';  // Limpiar el campo de texto
        }
    }

    ngOnDestroy() {
        this.websocketService.disconnect();
    }
}
