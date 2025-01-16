import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    RouterLink
  ]
})
export class NewPostComponent implements OnInit {
  postContent: string = ''; // Contenido del post
  tempInput: string = ''; // Entrada de texto temporal para copiar al post
  uploadedFile: File | null = null; // Archivo subido

  constructor() {}

  ngOnInit(): void {}

  // Borra el contenido del post
  clearPost() {
    this.postContent = '';
  }

  // Maneja el archivo subido
  handleFileInput(event: any) {
    const file = event.target.files[0];
    this.uploadedFile = file;
    console.log('Archivo subido:', file);
  }

  // Actualiza el contenido del post con la entrada temporal
  updatePostContent() {
    this.postContent += ` ${this.tempInput}`;
    this.tempInput = ''; // Limpia el campo de entrada
  }
}
