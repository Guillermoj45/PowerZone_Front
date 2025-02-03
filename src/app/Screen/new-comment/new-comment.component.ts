import { Component, Input } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { close, send } from 'ionicons/icons';
import { FormsModule } from '@angular/forms';
import { CommentService } from '../../Service/Comment.service';
@Component({
    selector: 'app-new-comment',
    templateUrl: './new-comment.component.html',
    styleUrls: ['./new-comment.component.scss'],
    imports: [
        IonicModule,
        FormsModule
    ],
    standalone: true
})
export class NewCommentComponent {
    @Input() postId!: number;
    commentContent: string = '';

    constructor(private modalController: ModalController, private commentSerive: CommentService) {
        addIcons({ close, send });
    }

    dismiss() {
        this.modalController.dismiss();
    }

    submitComment() {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('No token found in session storage');
            return;
        }
        if (!this.postId) {
            console.error('Post ID is not defined');
            return;
        }
        console.log('Creating comment:', this.commentContent);
        console.log('Post ID:', this.postId);
        this.commentSerive.createComment(token, this.postId, this.commentContent).subscribe(
            (response) => {
                console.log('Comment added:', response);
                this.dismiss();
            },
            (error) => {
                console.error('Error adding comment:', error);
            }
        );
    }
}
