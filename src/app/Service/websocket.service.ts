import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatMessage } from '../Models/ChatMessage';

@Injectable({
    providedIn: 'root',
})
export class WebsocketService {
    private stompClient!: Client;
    private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]); // Lista de mensajes

    constructor() {}

    connect(roomId: string) {
        const webSocketUrl = `ws://localhost:8080/ws-native`; // URL del servidor WebSocket nativo
        this.stompClient = new Client({
            webSocketFactory: () => new WebSocket(webSocketUrl),
            reconnectDelay: 5000,
            debug: (str) => console.log(str),
            onConnect: () => {
                console.log('Conectado al servidor WebSocket nativo');
                this.stompClient.subscribe(`/topic/messages/${roomId}`, (message) => {
                    try {
                        const chatMessage: ChatMessage = JSON.parse(message.body);
                        const currentMessages = this.messageSubject.getValue(); // Obtener los mensajes actuales
                        this.messageSubject.next([...currentMessages, chatMessage]); // Emitir nuevos mensajes
                    } catch (error) {
                        console.error('Error al procesar el mensaje recibido:', error);
                    }
                });
            },
            onStompError: (frame) => {
                console.error('Error en WebSocket: ', frame.headers['message']);
            },
        });

        this.stompClient.activate();
    }

    sendMessage(chatMessage: ChatMessage) {
        if (this.stompClient && this.stompClient.connected) {
            const message = JSON.stringify(chatMessage);
            this.stompClient.publish({
                destination: `/app/chat/${chatMessage.groupId}`,
                body: message,
            });
        } else {
            console.error('No se puede enviar el mensaje: WebSocket no está conectado.');
        }
    }

    getMessageObservable(): Observable<ChatMessage[]> {
        return this.messageSubject.asObservable();
    }

    disconnect() {
        if (this.stompClient && this.stompClient.active) {
            this.stompClient.deactivate();
            console.log('Conexión WebSocket cerrada.');
        }
    }
}
