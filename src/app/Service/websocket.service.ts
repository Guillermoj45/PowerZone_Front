import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import { BehaviorSubject, Observable, filter } from 'rxjs';
import { ChatMessage } from '../Models/ChatMessage';

@Injectable({
    providedIn: 'root',
})
export class WebsocketService {
    private stompClient!: Client;
    private messageSubject: BehaviorSubject<ChatMessage | null> = new BehaviorSubject<ChatMessage | null>(null);

    constructor() {
        this.connect();
    }

    connect() {
        const webSocketUrl = 'ws://localhost:8080/ws-native'; // URL del servidor WebSocket nativo
        this.stompClient = new Client({
            webSocketFactory: () => new WebSocket(webSocketUrl), // Usa WebSocket nativo
            reconnectDelay: 5000, // Reintentar cada 5 segundos
            debug: (str) => console.log(str),
            onConnect: () => {
                console.log('Conectado al servidor WebSocket nativo');
                this.stompClient.subscribe('/topic/messages/room1', (message) => {
                    try {
                        const chatMessage: ChatMessage = JSON.parse(message.body);
                        this.messageSubject.next(chatMessage); // Emitir mensaje
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
            console.log('Enviando mensaje:', message);
            this.stompClient.publish({
                destination: '/app/chat/room1',
                body: message,
            });
        } else {
            console.error('No se puede enviar el mensaje: WebSocket no está conectado.');
        }
    }

    getMessageObservable(): Observable<ChatMessage> {
        return this.messageSubject.asObservable().pipe(
            filter((message): message is ChatMessage => message !== null)
        );
    }

    disconnect() {
        if (this.stompClient && this.stompClient.active) {
            this.stompClient.deactivate();
            console.log('Conexión WebSocket cerrada.');
        }
    }

}
