import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule, ModalController, ToastController } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { addIcons } from "ionicons";
import { send, close, folderOutline } from "ionicons/icons";
import { PostService } from '../../Service/Post.service';
import { NgIf } from "@angular/common";

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
        NgIf,
    ]
})
export class NewPostComponent implements OnInit {
    @ViewChild('fileInput', { static: false }) fileInput!: ElementRef<HTMLInputElement>;
    postContent: string = '';
    selectedFile: File | null = null;
    fileName: string = ''; // Para guardar el nombre del archivo
    imageSelected: boolean = false;

    constructor(
        private modalController: ModalController,
        private postService: PostService,
        private toastController: ToastController // Add ToastController
    ) {
        addIcons({ close, send, folderOutline });
    }

    ngOnInit() {}

    dismiss() {
        this.modalController.dismiss();
    }

    async submitPost() {
        if (!this.imageSelected) {
            const toast = await this.toastController.create({
                message: 'Es obligatorio añadir una imagen.',
                color: 'danger',
                duration: 2000,
                position: 'top',
                cssClass: 'custom-toast'
            });
            await toast.present();
            return;
        }

        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('No token found in cookies');
            return;
        }

        const newPost = {
            content: this.postContent,
            delete: false,
        };

        const formData = new FormData();
        formData.append('post', JSON.stringify(newPost));

        if (this.selectedFile) {
            formData.append('file', this.selectedFile);
        }

        console.log('Creating post with file:', newPost);
        console.log('Token:', token);

        this.postService.createPost(token, formData).subscribe(
            (response) => {
                console.log('Post created successfully:', response);
                this.dismiss();
                window.location.reload();
            },
            (error) => {
                console.error('Error creating post:', error);
            }
        );
    }

    triggerFileInput() {
        console.log('triggerFileInput llamado');
        if (this.fileInput && this.fileInput.nativeElement) {
            this.fileInput.nativeElement.click();
        } else {
            console.error('Elemento fileInput no encontrado');
        }
    }

    onFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedFile = input.files[0];
            this.fileName = this.selectedFile.name;
            this.imageSelected = true; // Set flag to true when an image is selected
            console.log('Archivo seleccionado:', this.fileName);
        }
    }
}
