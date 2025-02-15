import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {ChatBotService} from '../../Service/chat-bot.service';
import {CommonModule} from '@angular/common';
import {addIcons} from 'ionicons';
import {logoIonitron, sendOutline, sendSharp} from 'ionicons/icons';
import {BoldPipe} from '../../Service/bold.pipe';

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
      this.chabot.sendMessage(this.messageText, token).subscribe({
        next: (response: any) => {
          console.log('Respuesta del servidor:', response);
          setTimeout(() => {
            let botMessage: string;
            if (typeof response === 'string') {
              botMessage = response;
            } else if (response && typeof response.text === 'string') {
              botMessage = response.text;
            } else {
              botMessage = 'Respuesta no disponible';
            }
            this.messages.push({ text: botMessage, isUser: false });
            this.isTyping = false;
          }, 1000);
        },
        error: (error: any) => {
          console.error('Error en la respuesta:', error);
          const errorMessage = error.error?.text || 'Error al enviar el mensaje';
          this.messages.push({ text: errorMessage, isUser: false });
          this.isTyping = false;
        }
      });
      this.messageText = '';
    } else {
      console.error('El texto del mensaje está vacío');
    }
  }

}
