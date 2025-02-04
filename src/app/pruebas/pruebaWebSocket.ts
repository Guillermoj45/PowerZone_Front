import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WebSocketService } from '../Service/websocket.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div>
      <h2>Chat con WebSocket Nativo</h2>
      <div *ngIf="lastMessage">
        <strong>Último mensaje recibido:</strong> {{ lastMessage }}
      </div>
      <input [(ngModel)]="newMessage" placeholder="Escribe un mensaje" />
      <button (click)="sendMessage()">Enviar</button>
    </div>
  `
})
export class ChatComponent {
  newMessage: string = '';
  lastMessage: string = '';

  constructor(private wsService: WebSocketService) {
    this.wsService.messages$.subscribe(message => {
      this.lastMessage = message;
    });
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      // Aquí se puede enviar un string o un JSON stringificado
      this.wsService.sendMessage(this.newMessage.trim());
      this.newMessage = '';
    }
  }
}
