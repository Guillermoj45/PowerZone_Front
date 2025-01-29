import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ChatBotService } from '../../Service/chat-bot.service';

@Component({
    selector: 'app-health',
    templateUrl: './health.component.html',
    styleUrls: ['./health.component.scss'],
    standalone: true,
    imports: [FormsModule, IonicModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HealthComponent {
    messageText: string = '';

    constructor(private chabot: ChatBotService) {}

    sendMessage() {
        if (this.messageText.trim()) {
            const token = sessionStorage.getItem('token');
            this.chabot.sendMessage(this.messageText, token).subscribe(
                (data: any) => {
                    console.log('Message sent:', data);
                },
                (error: any) => {
                    console.error('Error sending message:', error);
                }
            );
        } else {
            console.error('Message text is empty');
        }
    }
}
