import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
    selector: 'app-mensajes',
    templateUrl: './mensajes.component.html',
    styleUrls: ['./mensajes.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class MensajesComponent  implements OnInit {
    presentingElement!: HTMLElement;

  constructor() { }

  ngOnInit() {

  }

  crearNuevaConversacion() {

  }
}
