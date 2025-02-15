import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PostService} from '../../Service/Post.service';
import {PostDto} from '../../Models/PostDto';
import {IonicModule, ModalController, ToastController} from '@ionic/angular';
import {NgForOf, NgIf} from "@angular/common";
import {addIcons} from 'ionicons';
import {
    bookmark,
    bookmarkOutline,
    chatbubble,
    ellipsisHorizontal,
    exitOutline,
    heart,
    heartOutline,
    shareSocial,
    trash
} from 'ionicons/icons';

@Component({
    selector: 'app-posts-user',
    templateUrl: './posts-user.component.html',
    styleUrls: ['./posts-user.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgIf,
        NgForOf
    ]
})
export class PostsUserComponent implements OnInit, AfterViewInit {

    posts: PostDto[] = [];
    userId: string | null = null;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private router: Router,
        private modalController: ModalController,
        private toastController: ToastController
    ) {addIcons({ bookmark, heart, chatbubble, shareSocial, heartOutline, bookmarkOutline, ellipsisHorizontal, trash, exitOutline });}

    ngOnInit() {
        this.userId = this.route.snapshot.paramMap.get('id');
        if (this.userId) {
            this.loadPostsByUserId(this.userId);
        }
    }

    ngAfterViewInit(): void {
        const token = sessionStorage.getItem('token');
        if (token) {
            this.postService.isNewUser(token).subscribe({
                next: (isNewUser) => {
                    if (isNewUser) {
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

    loadPostsByUserId(userId: string) {
        const token = sessionStorage.getItem('token');
        if (token) {
            this.postService.getUserPostsById(token, userId).subscribe(
                (data: PostDto[]) => {
                    this.posts = data;
                    this.posts.forEach(post => {
                        const postId = post.post?.id;
                        if (postId !== undefined) {
                            this.postService.hasLikedPost(token, postId).subscribe(
                                (hasLiked) => {
                                    post.liked = hasLiked;
                                },
                                (error) => {
                                    console.error(`Error checking like status for post ${postId}:`, error);
                                }
                            );

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
                    console.log('Loaded posts for user ID:', userId, this.posts);
                },
                (error) => {
                    console.error('Error retrieving posts for user ID:', error);
                    this.posts = [];
                }
            );
        } else {
            console.error('Token is null');
        }
    }

    async likePost(post: PostDto) {
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
    viewPostDetails(post: PostDto) {
        const postId = post.post?.id;
        if (postId !== undefined) {
            this.router.navigate([`/post-details`, postId]);
        } else {
            console.error('Post ID not found');
        }
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
                },
                (error) => {
                    console.error('Error saving the post:', error);
                }
            );
        }
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
