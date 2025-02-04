// src/app/Screen/post-details/post-details.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../Service/Post.service';
import { CommentService } from '../../Service/Comment.service';
import { PostDto } from '../../Models/PostDto';
import { CommentDetails } from '../../Models/CommentDetails';
import {IonicModule, ModalController, ModalOptions, ToastController} from '@ionic/angular';
import {NewCommentComponent} from "../new-comment/new-comment.component";
import {NgForOf, NgIf} from "@angular/common";
import {addIcons} from "ionicons";
import {bookmark, bookmarkOutline, chatbubble, heart, heartOutline, shareSocial} from "ionicons/icons";


@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
    imports: [
        IonicModule,
        NgForOf,
        NgIf
    ],
    standalone: true
})
export class PostDetailsComponent implements OnInit {
    postId!: number;
    post!: PostDto;
    comments: CommentDetails[] = [];

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private commentService: CommentService,
        private toastController: ToastController,
        private modalController: ModalController
    ) {addIcons({ bookmark, heart, chatbubble, shareSocial, heartOutline, bookmarkOutline });}

    ngOnInit(): void {
        this.postId = Number(this.route.snapshot.paramMap.get('id'));
        this.loadPostDetails();
        this.loadComments();

    }

    loadPostDetails() {
        const token = sessionStorage.getItem('token');
        if (token) {
            this.postService.getPostById(token, this.postId).subscribe(
                (post) => {
                    console.log('Datos del post:', post);
                    this.post = post;
                },
                (error) => console.error('Error loading post details:', error)
            );
        }
    }

    loadComments() {
        const token = sessionStorage.getItem('token');
        if (token) {
            this.commentService.getCommentsByPostId(token, this.postId).subscribe(
                (comments) => {
                    console.log('Comentarios:', comments);
                    this.comments = comments;
                },
                (error) => console.error('Error loading comments:', error)
            );
        }
    }
    likePost(post: PostDto) {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('No token found in session storage');
            return;
        }

        const postId = post.post?.id;
        if (postId === undefined) {
            console.error('Post ID not found');
            return;
        }

        this.postService.hasLikedPost(token, postId).subscribe(
            (hasLiked) => {
                if (hasLiked) {

                    this.postService.unlikePost(token, postId).subscribe(
                        () => {
                            console.log(`Unliked post: ${postId}`);
                            post.liked = false;
                            this.ngOnInit();
                        },
                        (error) => console.error('Error unliking the post:', error)
                    );
                } else {
                    this.postService.likePost(token, postId).subscribe(
                        () => {
                            console.log(`Liked post: ${postId}`);
                            post.liked = true;
                            this.ngOnInit();
                        },
                        (error) => console.error('Error liking the post:', error)
                    );
                }
            },
            (error) => console.error('Error checking like status:', error)
        );
    }



    async savePost(post: PostDto) {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('No token found in session storage');
            return;
        }

        const postId = post.post?.id;
        if (postId === undefined) {
            console.error('Post ID not found');
            return;
        }

        if (post.saved) {
            // Unsave the post
            this.postService.unsavePost(token, postId).subscribe(
                async () => {
                    console.log(`Unsaved post: ${postId}`);
                    post.saved = false;
                    const toast = await this.toastController.create({
                        message: 'Eliminado de los Post guardados',
                        color: 'success',
                        duration: 2000,
                        position: 'top',

                    });
                    await toast.present();
                },
                (error) => {
                    console.error('Error unsaving the post:', error);
                }
            );
        } else {
            // Save the post
            this.postService.savePost(token, postId).subscribe(
                async () => {
                    console.log(`Saved post: ${postId}`);
                    post.saved = true;
                    const toast = await this.toastController.create({
                        message: 'Post guardado correctament',
                        color: 'success',
                        duration: 2000,
                        position: 'top',
                        cssClass: 'custom-toast'
                    });
                    await toast.present();
                },
                (error) => {
                    console.error('Error saving the post:', error);
                }
            );
        }
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
