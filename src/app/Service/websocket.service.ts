import { Injectable } from '@angular/core';
import { Client } from '@stomp/stompjs';
import { BehaviorSubject, Observable } from 'rxjs';
import { ChatMessage } from '../Models/ChatMessage';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
    providedIn: 'root',
})
export class WebsocketService {
    private stompClient!: Client;
    private messageSubject: BehaviorSubject<ChatMessage[]> = new BehaviorSubject<ChatMessage[]>([]); // Lista de mensajes

    constructor(private http: HttpClient) {}

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
                        this.messageSubject.next([chatMessage]); // Emitir nuevos mensajes
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

    getUserGroups(): Observable<any> {
        const url = `/api/messages/info`; // URL del endpoint en el backend
        const token = sessionStorage.getItem('token');
        console.log('Token obtenido:', token); // Muestra el token en la consola
        const headers = { Authorization: `Bearer ${token}` }; // Añade el token del usuario
        return this.http.get<any>(url, { headers });
    }

    // Método para obtener los perfiles seguidos
    getFollowingProfiles(): Observable<any> {
        const url = `/api/profile/following`; // URL del endpoint para obtener los perfiles seguidos
        const token = sessionStorage.getItem('token'); // Obtiene el token de la sessionStorage
        if (!token) {
            return new Observable(observer => {
                observer.error('Token no encontrado');
            });
        }
        console.log('Token obtenido:', token); // Muestra el token en la consola
        const headers = { Authorization: `Bearer ${token}` }; // Añade el token del usuario

        return this.http.get<any>(url, { headers }); // Llama al endpoint del backend
    }

    createGroup(groupName: { name: string }, file?: File | null): Observable<any> {
        const url = '/api/messages/create';  // Endpoint del backend
        const token = sessionStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

        const formData = new FormData();
        formData.append('group', JSON.stringify({ name: groupName.name }));
        if (file) {
            formData.append('file', file); // Solo agregar el archivo si está presente
        }

        return this.http.post<any>(url, formData, { headers });
    }


    addUsersToGroup(groupId: number, userIds: number[]): Observable<any> {
        const url = `/api/messages/addUsersToGroup`; // Endpoint del backend
        const token = sessionStorage.getItem('token');
        const headers = { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' };
        const params = { groupId }; // Solo enviamos el groupId como parámetro
        const body = userIds; // Lista de IDs de usuarios en el cuerpo de la solicitud

        return this.http.post<any>(url, body, { headers, params });
    }

    getMessagesByGroup(groupId: number): Observable<ChatMessage[]> {
        const url = `/api/messages/group/${groupId}`; // Endpoint del backend
        const token = sessionStorage.getItem('token'); // Obtiene el token de sesión
        const headers = { Authorization: `Bearer ${token}` }; // Incluye el token en los headers

        return this.http.get<ChatMessage[]>(url, { headers });
    }

    getUltimosMensajesPorGrupo(): Observable<any> {
        const url = `/api/messages/grupos/ultimos-mensajes`; // Endpoint del backend
        const token = sessionStorage.getItem('token'); // Obtiene el token de sesión
        const headers = { Authorization: `Bearer ${token}` }; // Incluye el token en los headers
        return this.http.get<any>(url, { headers }); // Llama al endpoint del backend
    }

    disconnect() {
        if (this.stompClient && this.stompClient.active) {
            this.stompClient.deactivate();
            console.log('Conexión WebSocket cerrada.');
        }
    }
}
