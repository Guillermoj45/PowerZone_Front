import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonicModule, ModalController } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { addIcons } from "ionicons";
import { send, close, folderOutline } from "ionicons/icons";
import { PostService } from '../../Service/Post.service';
import { Post } from '../../Models/Post';

@Component({
    selector: 'app-new-post',
    templateUrl: './new-post.component.html',
    styleUrls: ['./new-post.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        FormsModule,
    ]
})
export class NewPostComponent implements OnInit {
    @ViewChild('fileInput') fileInput!: ElementRef;
    postContent: string = '';
    selectedFile: File | null = null;

    constructor(private modalController: ModalController, private postService: PostService) {
        addIcons({ close, send, folderOutline });
    }

    dismiss() {
        this.modalController.dismiss();
        window.location.reload();
    }

    submitPost() {
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
            },
            (error) => {
                console.error('Error creating post:', error);
            }
        );
    }

    ngOnInit() {}

    triggerFileInput() {
        this.fileInput.nativeElement.click();
    }

    onFileChange(event: Event) {
        const input = event.target as HTMLInputElement;
        if (input.files && input.files.length > 0) {
            this.selectedFile = input.files[0];
        }
    }
}


