import { Component, OnDestroy, OnInit } from '@angular/core';
import { WebsocketService } from '../../Service/websocket.service';
import { ChatMessage } from '../../Models/ChatMessage';
import { DatePipe, NgForOf } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../Service/auth.service';

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

    constructor(
        private websocketService: WebsocketService,
        private route: ActivatedRoute,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        // Obtener el groupId de la URL
        this.route.paramMap.subscribe(params => {
            this.groupId = +params.get('groupId')!;
            this.websocketService.connect(this.groupId.toString());
        });

        // Obtener el nickname del usuario
        const currentUser = this.authService.getCurrentUser();
        if (currentUser && currentUser.nickname) {
            this.senderNickname = currentUser.nickname;
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
            const currentUser = this.authService.getCurrentUser();
            if (!currentUser) {
                console.error('No se ha encontrado el usuario.');
                return;
            }

            const chatMessage: ChatMessage = {
                sender: this.senderNickname,
                userId: currentUser.username,
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
