import { Component, OnInit } from '@angular/core';
import {IonicModule, ModalController, ModalOptions, ToastController} from '@ionic/angular';
import { CommonModule, NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { bookmark, chatbubble, heart, shareSocial, heartOutline } from 'ionicons/icons';
import { PostService } from '../../Service/Post.service';
import { Post } from '../../Models/Post';
import { PostDto } from '../../Models/PostDto';
import { NewCommentComponent } from '../new-comment/new-comment.component';
@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgForOf,
        CommonModule,
    ]
})
export class PostsComponent implements OnInit {
    posts: PostDto[] = [];

    constructor(private router: Router, private postService: PostService, private modalController: ModalController, private toastController: ToastController) {
        addIcons({ bookmark, heart, chatbubble, shareSocial, heartOutline });
    }

    ngOnInit(): void {
        this.loadAllPosts();

    }

    loadAllPosts() {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('No token found in session storage');
            return;
        }
        this.postService.getAllPosts(token).subscribe(
            (posts) => {
                console.log(posts);
            },
            (error) => {
                console.error('Error fetching all posts:', error);
            }
        );

        this.postService.getAllPosts(token).subscribe(
            (posts) => {
                this.posts = posts;
            },
            (error) => {
                console.error('Error fetching all posts:', error);
            }
        );
    }

    viewPostDetails(post: PostDto) {
        this.router.navigate(['/post-details'], { state: { post } });
    }

    likePost(post: PostDto) {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('No token found in session storage');
            return;
        }
        window.location.reload();

        if (!post.post) {
            console.error('Post data not found');
            return;
        }

        this.postService.likePost(token, post.post.id).subscribe(
            (response) => {
                console.log(`Liked post: ${post.post?.id}`);
                post.liked = !post.liked;

            },
            (error) => {
                console.error('Error liking the post:', error);
            }
        );
    }

    async savePost(post: PostDto) {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('No token found in session storage');
            return;
        }
        console.log(post);
        const postId = post.post?.id;
        if (postId === undefined) {
            console.error('Post ID not found');
            return;
        }

        console.log(`Saving post: ${postId} with token: ${token}`);
        const toast = await this.toastController.create({
            message: 'Publicación guardada correctamente',
            color: 'success',
            duration: 2000,
            position: 'top',
            cssClass: 'custom-toast'
        });
        await toast.present();
        this.postService.savePost(token, postId).subscribe(
            (response) => {

                console.log(`Saved post: ${postId}`);
            },
            (error) => {
                console.error('Error saving the post:', error);
            }
        );
    }

    async openNewCommentModal(idpost: number | undefined) {
        const modal = await this.modalController.create({
            component: NewCommentComponent,
            componentProps: { postId: idpost }
        } as ModalOptions);
        await modal.present();

    }
    async sharePost(post: PostDto) {
        const postId = post.post?.id;
        if (postId === undefined) {
            console.error('Post ID not found');
            return;
        }

        const link = `${window.location.origin}/post-details/${postId}`;
        await navigator.clipboard.writeText(link);

        const toast = await this.toastController.create({
            message: 'Enlace en el portapapeles',
            color: 'success',
            duration: 2000,
            position: 'top',
            cssClass: 'custom-toast'
        });
        await toast.present();
    }

}
