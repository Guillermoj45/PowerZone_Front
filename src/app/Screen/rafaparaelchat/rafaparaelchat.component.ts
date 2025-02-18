import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {WebsocketService} from '../../Service/websocket.service';
import {ChatMessage} from '../../Models/ChatMessage';
import {DatePipe, Location, NgClass, NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import {AuthService} from '../../Service/auth.service';
import {ProfileMessenger} from "../../Models/Profile";
import {ProfileService} from "../../Service/profile.service";
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {arrowBackOutline, send, searchOutline, closeOutline, arrowDownOutline} from "ionicons/icons";
import {CloudinaryService} from "../../Service/Cloudinary.service";

@Component({
    selector: 'app-chat',
    templateUrl: './rafaparaelchat.component.html',
    styleUrls: ['./rafaparaelchat.component.scss'],
    imports: [
        DatePipe,
        FormsModule,
        NgForOf,
        IonicModule,
        NgClass,
        NgIf
    ],
    standalone: true
})
export class RafaparaelchatComponent implements OnInit, OnDestroy {
    @ViewChild('chatMessages') private chatMessagesContainer!: ElementRef;
    messages: ChatMessage[] = [];
    newMessage: string = '';
    senderNickname: string = '';
    groupId!: number;
    user?: ProfileMessenger;
    groupName: string = '';  // Variable para almacenar el nombre del grupo
    groupPhotoUrl: string = '';  // Variable para almacenar la URL de la foto del grupo
    searchTerm: string = '';  // Variable para almacenar el término de búsqueda
    searchIndex: number = 0;
    showSearchBar: boolean = false;
    followConversation: boolean = true;
    isIconBlue: boolean = false;


    constructor(
        private websocketService: WebsocketService,
        private route: ActivatedRoute,
        private authService: AuthService,
        private profileService: ProfileService,
        private location: Location,
        private cloudinaryService: CloudinaryService,
    ) {
        addIcons({ arrowBackOutline, send, searchOutline, closeOutline, arrowDownOutline });
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
                        this.messages = messages;  // Cargar los mensajes en la variable
                    },
                    error: (error) => {
                        console.error('Error obteniendo mensajes del grupo:', error);
                    }
                });

                // Llamar al servicio para obtener la información del grupo
                this.websocketService.getGroupDetails(this.groupId).subscribe({
                    next: (groupInfo) => {
                        console.log('Información del grupo:', groupInfo);
                        this.groupName = groupInfo.name;  // Asignar el nombre del grupo
                        this.groupPhotoUrl = this.cloudinaryService.getImage(groupInfo.image).toURL();
                    },
                    error: (error) => {
                        console.error('Error obteniendo la información del grupo:', error);
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
                    this.senderNickname = profile.nickName;
                },
                error: (error) => {
                    console.error('Error obteniendo el perfil del usuario:', error);
                }
            });
        } else {
            console.error('Token no encontrado en sessionStorage.');
        }

        // Suscribirse a los mensajes entrantes
        this.websocketService.getMessageObservable().subscribe({
            next: (messages: ChatMessage[]) => {
                this.messages = [...this.messages, ...messages];  // Agregar los nuevos mensajes
                if (this.followConversation) {
                    this.scrollToBottom();
                }
            },
            error: (error) => {
                console.error('Error en la recepción de mensajes:', error);
            }
        });
    }

    // Enviar un mensaje
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

        this.websocketService.sendMessage(chatMessage);
        this.newMessage = '';  // Limpiar el campo de texto
        if (this.followConversation) {
            this.scrollToBottom();
        }
    }

    // Desconectar del WebSocket cuando se destruye el componente
    ngOnDestroy() {
        this.websocketService.disconnect();
    }

    navigateBack() {
        window.history.back();
        setTimeout(() => location.reload(), 100);
    }
    onSearchInput(event: any) {
        if (event.key === 'Enter') {
            this.searchMessages();
        }
    }

    clearSearch() {
        this.searchTerm = '';
        this.searchIndex = 0;
    }
    toggleSearchBar() {
        this.showSearchBar = !this.showSearchBar;
    }
    searchMessages() {
        if (!this.searchTerm.trim()) {
            console.error('Término de búsqueda vacío.');
            return;
        }

        // Convertimos ambos a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas
        const term = this.searchTerm.trim().toLowerCase();

        const searchResults = this.messages.filter(message => message.content.toLowerCase().includes(term));

        if (searchResults.length > 0) {
            const selectedMessage = searchResults[this.searchIndex];

            // Buscar el mensaje en el DOM con el timestamp correspondiente
            const messageElement = document.querySelector(`[data-message-id="${selectedMessage.timestamp}"]`);

            if (messageElement) {
                messageElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                messageElement.classList.add('highlight'); // Añadir clase para resaltar el mensaje

                // Remover la clase después de 2 segundos para no dejarlo permanentemente resaltado
                setTimeout(() => messageElement.classList.remove('highlight'), 2000);

                // Avanzar al siguiente resultado en la lista
                this.searchIndex = (this.searchIndex + 1) % searchResults.length;
            } else {
                console.error('No se pudo encontrar el mensaje en el DOM.');
            }
        } else {
            console.error('No se encontraron mensajes con el término de búsqueda.');
        }
    }
    toggleFollowConversation() {
        this.followConversation = !this.followConversation;
        this.isIconBlue = !this.isIconBlue;
    }

    scrollToBottom() {
        if (this.chatMessagesContainer) {
            this.chatMessagesContainer.nativeElement.scrollTop = this.chatMessagesContainer.nativeElement.scrollHeight;
        }
    }
}
