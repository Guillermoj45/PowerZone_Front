import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChatBotService } from '../../Service/chat-bot.service';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import {logoIonitron, sendOutline, sendSharp} from 'ionicons/icons';
import { BoldPipe } from '../../Service/bold.pipe';

@Component({
    selector: 'app-health',
    templateUrl: './health.component.html',
    styleUrls: ['./health.component.scss'],
    standalone: true,
    imports: [FormsModule, IonicModule, CommonModule, BoldPipe],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HealthComponent {
    messageText: string = '';
    messages: { text: string; isUser: boolean }[] = [];
    isTyping: boolean = false;

    constructor(private chabot: ChatBotService) {
        addIcons({
            sendSharp, logoIonitron, sendOutline
        });
    }

    sendMessage() {
        if (this.messageText.trim()) {
            this.messages.push({ text: this.messageText, isUser: true });
            this.isTyping = true;

            const token = sessionStorage.getItem('token');
            this.chabot.sendMessage(this.messageText, token).subscribe(
                (data: any) => {
                    setTimeout(() => {
                        const botMessage = data.choices[0]?.message?.content || 'Respuesta no disponible';
                        this.messages.push({ text: botMessage, isUser: false });
                        this.isTyping = false; // Desactivar animación
                    }, 1000); // Ajusta el retraso si lo necesitas
                },
                (error: any) => {
                    console.error('Error sending message:', error);
                    this.isTyping = false; // Desactivar animación
                }
            );
            this.messageText = '';
        } else {
            console.error('Message text is empty');
        }
    }
}
