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

  postContent: string = '';
  selectedFile: File | null = null;
    constructor(private modalController: ModalController) {}

    dismiss() {
        this.modalController.dismiss();
    }

  submitPost() {
    // Aquí puedes manejar el envío de la publicación
    console.log("Contenido:", this.postContent);
    if (this.selectedFile) {
      console.log("Archivo seleccionado:", this.selectedFile.name);
    }
    this.dismiss();  // Cerrar el modal al enviar
  }

  ngOnInit() {}

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
}
