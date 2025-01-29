import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChatBotService } from '../../Service/chat-bot.service';
import { NgForOf } from "@angular/common";
import { addIcons } from 'ionicons';
import { sendSharp } from 'ionicons/icons';

@Component({
    selector: 'app-health',
    templateUrl: './health.component.html',
    styleUrls: ['./health.component.scss'],
    standalone: true,
    imports: [FormsModule, IonicModule, NgForOf],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HealthComponent {
    messageText: string = '';
    messages: { text: string; isUser: boolean }[] = [];

    constructor(private chabot: ChatBotService) {
        addIcons({
            sendSharp
        });
    }

    sendMessage() {
        console.log('Before message push:', this.messages); // Verificar estado inicial
        if (this.messageText.trim()) {
            this.messages.push({ text: this.messageText, isUser: true });
            console.log('After user message push:', this.messages);

            const token = sessionStorage.getItem('token');
            this.chabot.sendMessage(this.messageText, token).subscribe(
                (data: any) => {
                    console.log('Response from chatbot:', data); // Verificar la estructura completa de la respuesta

                    // Acceder correctamente al contenido del mensaje del bot
                    const botMessage = data.choices[0]?.message?.content || 'Respuesta no disponible';
                    this.messages.push({ text: botMessage, isUser: false });
                    console.log('After bot message push:', this.messages); // Verificar cambios
                },
                (error: any) => {
                    console.error('Error sending message:', error);
                }
            );

            this.messageText = '';
        } else {
            console.error('Message text is empty');
        }
    }
}
