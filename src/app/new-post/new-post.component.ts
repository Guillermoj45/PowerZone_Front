import { Component, OnInit } from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule
    ]
})
export class NewPostComponent  implements OnInit {
    postTitle: string = '';
    postContent: string = '';
    constructor(private modalController: ModalController) {}

    dismiss() {
        this.modalController.dismiss();
    }

    submitPost() {
        // Aquí puedes manejar el envío de la publicación
        console.log("Título:", this.postTitle);
        console.log("Contenido:", this.postContent);
        this.dismiss();  // Cerrar el modal al enviar
    }

  ngOnInit() {}

}
