import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {arrowBackOutline, send} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule
    ]
})
export class ChatComponent  implements OnInit {

    newMessage: string = '';

    navigateBack() {
        console.log('Navegando hacia atrás');
    }

    sendMessage() {
        if (this.newMessage.trim() !== '') {
            console.log('Mensaje enviado:', this.newMessage);
            this.newMessage = '';
        }
    }

  constructor() {
        addIcons({arrowBackOutline, send})
  }

  ngOnInit() {}

}
