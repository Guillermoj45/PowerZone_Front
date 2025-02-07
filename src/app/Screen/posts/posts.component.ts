import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IonicModule, ModalController, ModalOptions, ToastController } from '@ionic/angular';
import { CommonModule, NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  bookmark,
  heart,
  chatbubble,
  shareSocial,
  heartOutline,
  bookmarkOutline,
  ellipsisHorizontal, trash, exitOutline
} from 'ionicons/icons';
import { PostService } from '../../Service/Post.service';
import { PostDto } from '../../Models/PostDto';
import { NewCommentComponent } from '../new-comment/new-comment.component';
import { ShepherdComponent } from '../../Component/shepherd/shepherd.component';
import {start} from "@popperjs/core";
import {ProfileService} from "../../Service/profile.service";
import {FormsModule} from "@angular/forms";
import {AdminService} from "../../Service/Admin.service";

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
    FormsModule,
  ]
})
export class PostsComponent implements OnInit, AfterViewInit {
    @ViewChild(ShepherdComponent) shepherdComponent!: ShepherdComponent;

    posts: PostDto[] = [];
    @ViewChild('popover') popover!: HTMLIonPopoverElement;

    isOpen = false;
    reportReason:string= "";
    isAdmin1: boolean = false;

    constructor(
      private router: Router,
                private postService: PostService,
                private modalController: ModalController,
                private toastController: ToastController,
                private profile : ProfileService,
                private adminService: AdminService
                ) {
        addIcons({ bookmark, heart, chatbubble, shareSocial, heartOutline, bookmarkOutline, ellipsisHorizontal, start, trash, exitOutline });
    }



    ngOnInit(): void {
        this.loadAllPosts();
        this.isAdmin();
    }

    presentPopover(e: Event, post?: PostDto) {
      // this.popover.event = e;
      this.isOpen = true;
    }

    deletePost(post: PostDto, state: string) {
      this.adminService.putWarning(post.post!.id!, state).subscribe({
        next: () => {
          console.log(`Deleted post: ${post.post!.id}`);
          this.isOpen = false;
          this.ngOnInit();
        },
        error: (error) => {
          console.error('Error deleting the post:', error);
        }
      });
    }


    isAdmin() {
      this.profile.isAdmin().subscribe({
        next: (isAdmin) => {
          this.isAdmin1 = isAdmin;
        },
        error: (error) => {
          this.isAdmin1 = false;
          console.error('Error checking if user is admin:', error);
        }
      })
    }

    reportPost(post: PostDto) {
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

      this.postService.reportPost(postId, this.reportReason).subscribe({
        next: () => {
          console.log(`Reported post: ${postId}`);
          this.isOpen = false;
          this.reportReason = "";
          this.ngOnInit();
        },
        error: (error) => {
          console.error('Error reporting the post:', error);
        }
      });
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
    viewPostDetails(post: PostDto) {
        const postId = post.post?.id;
        if (postId !== undefined) {
            this.router.navigate([`/post-details`, postId]);
        } else {
            console.error('Post ID not found');
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
