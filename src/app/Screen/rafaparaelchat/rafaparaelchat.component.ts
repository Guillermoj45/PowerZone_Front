import {Component, OnDestroy, OnInit} from '@angular/core';
import { WebsocketService } from '../../Service/websocket.service';
import { ChatMessage } from '../../Models/ChatMessage';
import {DatePipe, NgForOf} from "@angular/common";
import {FormsModule} from "@angular/forms";

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
    messages: ChatMessage[] = []; // Lista de mensajes
    newMessage: string = '';      // Mensaje nuevo que el usuario está escribiendo
    sender: string = 'Usuario1';  // Nombre del usuario (puedes cambiarlo dinámicamente)

    constructor(private websocketService: WebsocketService) {}

    ngOnInit(): void {
        // Escuchar mensajes entrantes
        this.websocketService.getMessageObservable().subscribe((message) => {
            if (message) {
                this.messages.push(message); // Agregar el mensaje a la lista
            }
        });
    }

    // Enviar un mensaje
    sendMessage() {
        if (this.newMessage.trim()) {
            const chatMessage: ChatMessage = {
                sender: this.sender,
                content: this.newMessage,
                timestamp: Date.now(),
                groupId: 'room1', // ID de la sala (puedes cambiarlo dinámicamente)
            };

            this.websocketService.sendMessage(chatMessage); // Enviar el mensaje al servidor
            this.newMessage = ''; // Limpiar el campo de texto
        }
    }

    ngOnDestroy() {
        this.websocketService.disconnect();
    }

}
