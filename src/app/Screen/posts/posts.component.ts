import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IonicModule, ModalController, ModalOptions, ToastController } from '@ionic/angular';
import { CommonModule, NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { bookmark, heart, chatbubble, shareSocial, heartOutline, bookmarkOutline } from 'ionicons/icons';
import { PostService } from '../../Service/Post.service';
import { PostDto } from '../../Models/PostDto';
import { NewCommentComponent } from '../new-comment/new-comment.component';
import { ShepherdComponent } from '../../Component/shepherd/shepherd.component';

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgForOf,
        CommonModule,
        ShepherdComponent,
    ]
})
export class PostsComponent implements OnInit, AfterViewInit {
    @ViewChild(ShepherdComponent) shepherdComponent!: ShepherdComponent;

    posts: PostDto[] = [];

    constructor(private router: Router, private postService: PostService, private modalController: ModalController,
                private toastController: ToastController) {

        addIcons({ bookmark, heart, chatbubble, shareSocial, heartOutline, bookmarkOutline });
    }

    ngOnInit(): void {
        this.loadAllPosts();
    }

    ngAfterViewInit(): void {
        const token = sessionStorage.getItem('token');
        if (token) {
            this.postService.isNewUser(token).subscribe({
                next: (isNewUser) => {
                    console.log("Hola")
                    if (isNewUser) {
                        this.shepherdComponent.startTour();
                        this.postService.changeUserStatus(token).subscribe({
                            next: () => {
                                console.log('User status changed');
                            },
                            error: (error) => {
                                console.error('Error changing user status:', error);
                            }
                        });
                    }
                },
                error: (error) => {
                    console.error('Error checking if new user:', error);
                }
            });
        } else {
            console.error('No token found in session storage');
        }
    }

    loadAllPosts() {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('No token found in session storage');
            return;
        }

        this.postService.getAllPosts(token).subscribe(
            (posts) => {
                this.posts = posts;
                this.posts.forEach(post => {
                    const postId = post.post?.id;
                    if (postId !== undefined) {
                        // Check if the user has liked the post
                        this.postService.hasLikedPost(token, postId).subscribe(
                            (hasLiked) => {
                                post.liked = hasLiked;
                            },
                            (error) => {
                                console.error(`Error checking like status for post ${postId}:`, error);
                            }
                        );

                        // Check if the user has saved the post
                        this.postService.hasSavedPost(token, postId).subscribe(
                            (hasSaved) => {
                                post.saved = hasSaved;
                            },
                            (error) => {
                                console.error(`Error checking save status for post ${postId}:`, error);
                            }
                        );
                    }
                });
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
