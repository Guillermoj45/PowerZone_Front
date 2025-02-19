import {Injectable} from '@angular/core';
import {Client} from '@stomp/stompjs';
import {BehaviorSubject, Observable} from 'rxjs';
import {ChatMessage} from '../Models/ChatMessage';
import {ProfileService} from "./profile.service";
import {ProfileTotal} from "../Models/ProfileTotal";
import {MegaNotification} from "../Models/MegaNotification";
import {environment} from "../../environments/environment.prod";

@Injectable({
    providedIn: 'root',
})
export class WebsocketServiceNotification {
    private stompClient!: Client;
    private megaNotification: BehaviorSubject<MegaNotification[]> = new BehaviorSubject<MegaNotification[]>([]); // Lista de mensajes

    constructor(
      private profileService: ProfileService // Inyecta el ProfileService
    ) {}

    connectToNotification() {
      let token = sessionStorage.getItem('token') || '';
      this.profileService.getProfile(token).subscribe({
          next: (profile:ProfileTotal) => {
            this.connect(profile.id);
          },
          error: (error) => {
              console.error('Error al cargar el perfil:', error);
          },
        complete: () => {
          console.log('Profile loaded');
        }
      })
    }

    private connect(roomId: number) {

        const webSocketUrl = environment.apiUrl + `/ws-native`; // URL del servidor WebSocket nativo
        this.stompClient = new Client({
            webSocketFactory: () => new WebSocket(webSocketUrl),
            reconnectDelay: 5000,
            debug: (str) => console.log(str),
            onConnect: () => {
                console.log('Conectado al servidor WebSocket nativo');
                this.stompClient.subscribe(`/topic/roomNotification/` + roomId, (message) => {
                    try {
                        const chatMessage: MegaNotification = JSON.parse(message.body);
                        console.log('ChatMessage: ', chatMessage);
                        const currentMessages = this.megaNotification.getValue(); // Obtener los mensajes actuales
                        this.megaNotification.next([chatMessage]); // Emitir nuevos mensajes
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

        // Obtener mensajes de un grupo
    getMessageObservable(): Observable<MegaNotification[]> {
        return this.megaNotification.asObservable();
    }

    sendMessage(chatMessage: ChatMessage) {
        if (this.stompClient && this.stompClient.connected) {
            const message = JSON.stringify(chatMessage);
            this.stompClient.publish({
                destination: `/app/roomNotification/${chatMessage.groupId}`,
                body: message,
            });
        } else {
            console.error('No se puede enviar el mensaje: WebSocket no está conectado.');
        }
    }
}
