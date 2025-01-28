import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {addIcons} from "ionicons";
import {send, close, folderOutline} from "ionicons/icons";
import {PostService} from '../../Service/Post.service';
import {Post} from '../../Models/Post';

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
    }

    submitPost() {
        const token = getCookie('auth-token'); // Reemplaza 'auth-token' con el nombre de tu cookie
        if (!token) {
            console.error('No token found in cookies');
            return;
        }

        const newPost: Post = {
            content: this.postContent,
            created_at: new Date(),
            user_id: 1,
            delete: false,
            images: new Set()
        };

        if (this.selectedFile) {
            this.postService.createPost(token, newPost, this.selectedFile).subscribe(
                (response) => {
                    console.log('Post created successfully:', response);
                    this.dismiss();
                },
                (error) => {
                    console.error('Error creating post:', error);
                }
            );
        } else {
            console.error('No file selected');
        }
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

function getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
    return null;
}
