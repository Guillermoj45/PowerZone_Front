import {Component, OnInit} from '@angular/core';
import {IonicModule, ModalController, ModalOptions, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {NewCommentComponent} from '../new-comment/new-comment.component';
import {CommonModule} from '@angular/common';
import {PostDto} from '../../Models/PostDto';
import {PostService} from '../../Service/Post.service';
import {addIcons} from 'ionicons';
import {bookmark, bookmarkOutline, chatbubble, heart, heartOutline, shareSocial} from 'ionicons/icons';

@Component({
    selector: 'app-post-save',
    templateUrl: './post-save.component.html',
    styleUrls: ['./post-save.component.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule]
})
export class PostSaveComponent implements OnInit {
    savedPosts: PostDto[] = [];

    constructor(
        private postService: PostService,
        private toastController: ToastController,
        private router: Router,
        private modalController: ModalController
    ) {
        addIcons({ bookmark, heart, chatbubble, shareSocial, heartOutline, bookmarkOutline });
    }

    ngOnInit(): void {
        this.loadSavedPosts();
        window.addEventListener('postUpdated', this.loadSavedPosts.bind(this));
    }



    loadSavedPosts() {
        const token = sessionStorage.getItem('token');
        if (!token) {
            console.error('No token found in session storage');
            return;
        }

        this.postService.getAllSavedPosts(token).subscribe(
            (posts) => {
                this.savedPosts = posts;
                this.savedPosts.forEach(post => {
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
                console.error('Error fetching saved posts:', error);
            }
        );
    }

    viewPostDetails(post: PostDto) {
        const postId = post.post?.id;
        if (postId !== undefined) {
            this.router.navigate([`/post-details`, postId]);
        } else {
            console.error('Post ID not found');
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
                    this.ngOnInit(); // Reload the component
                },
                (error) => {
                    console.error('Error unsaving the post:', error);
                }
            );
        } else {
            this.postService.savePost(token, postId).subscribe(
                async () => {
                    console.log(`Saved post: ${postId}`);
                    post.saved = true;
                    const toast = await this.toastController.create({
                        message: 'Post guardado correctamente',
                        color: 'success',
                        duration: 2000,
                        position: 'top',
                        cssClass: 'custom-toast'
                    });
                    await toast.present();
                    this.ngOnInit(); // Reload the component
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
  navigateToProfile(postId: number | undefined) {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found in session storage');
      return;
    }

    if (postId === undefined) {
      console.error('Post ID not found');
      return;
    }

    this.postService.getUserIdByPostId(token, postId).subscribe(
      (userId) => {
        this.router.navigate([`/profile/${userId}`]);
      },
      (error) => {
        console.error('Error fetching user ID:', error);
      }
    );
  }
}
