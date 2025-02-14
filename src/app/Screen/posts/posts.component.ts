import {Component, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { IonicModule, ModalController, ModalOptions, ToastController } from '@ionic/angular';
import { CommonModule, NgForOf } from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
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
import {start} from "@popperjs/core";
import {ProfileService} from "../../Service/profile.service";
import {FormsModule} from "@angular/forms";
import {AdminService} from "../../Service/Admin.service";
import {TutorialService} from "../../Service/tutorial.service";
import {NewPostComponent} from "../new-post/new-post.component";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgForOf,
    CommonModule,
    FormsModule,
  ]
})
export class PostsComponent implements OnInit {

  posts: PostDto[] = [];
  selectedFilter: string = 'recientes';

  isOpen = false;
  reportReason:string= "";
  openPopoverIndex: number = -1;
  isAdmin1: boolean = false;
  reportReason1: string = "";

  constructor(
    private router: Router,
    private postService: PostService,
    private modalController: ModalController,
    private toastController: ToastController,
    private profile : ProfileService,
    private adminService: AdminService,
    private tutorialService: TutorialService,
    private sanitizer: DomSanitizer
  ) {
    addIcons({ bookmark, heart, chatbubble, shareSocial, heartOutline, bookmarkOutline, ellipsisHorizontal, start, trash, exitOutline });
  }




  ngOnInit(): void {
    this.isAdmin();
    this.startTutorialIfNeeded();
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.loadPosts();
      }
    });
  }

  // Esta función se llama al hacer click en el ícono y abre el popover correspondiente

  presentPopover(index: number, ev: Event, post: any) {
    this.openPopoverIndex = index;
    // Si necesitas usar el evento (ev) o el post para otra lógica, agrégala aquí.
  }
  highlightHashtags(text: string | undefined): SafeHtml {
    if (!text) return ''; // Evita errores con undefined
    const replacedText = text.replace(/#(\w+)/g, '<span class="hashtag">#$1</span>');
    return this.sanitizer.bypassSecurityTrustHtml(replacedText);
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
    this.openPopoverIndex = -1;
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

    if (this.reportReason1 !== "otro"){
      this.reportReason = this.reportReason1;
    }

    this.postService.reportPost(postId, this.reportReason).subscribe({
      next: () => {
        console.log(`Reported post: ${postId}`);
        this.isOpen = false;
        this.reportReason = "";
        this.reportReason1 = "";
        this.ngOnInit();
      },
      error: (error) => {
        console.error('Error reporting the post:', error);
        this.isOpen = false;
        this.reportReason = "";
        this.reportReason1 = "";
      }
    });
    this.openPopoverIndex = -1;
  }

  startTutorialIfNeeded(): void {
    const token = sessionStorage.getItem('token');
    if (token) {
      this.postService.isNewUser(token).subscribe({
        next: (isNewUser) => {
          if (isNewUser) {
            console.log("Iniciando tutorial...");
            setTimeout(() => {
              this.tutorialService.startTour();
            }, 1000);

            this.postService.changeUserStatus(token).subscribe({
              next: () => {
                console.log('Estado del usuario actualizado.');
              },
              error: (error) => {
                console.error('Error actualizando estado del usuario:', error);
              }
            });
          }
        },
        error: (error) => {
          console.error('Error verificando si es nuevo usuario:', error);
        }
      });
    } else {
      console.error('No se encontró token en session storage');
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

    try {
      const hasLiked = await this.postService.hasLikedPost(token, postId).toPromise();
      if (hasLiked) {
        await this.postService.unlikePost(token, postId).toPromise();
        console.log(`Unliked post: ${postId}`);
        post.liked = false;
        post.numlikes = (post.numlikes ?? 0) - 1;
      } else {
        await this.postService.likePost(token, postId).toPromise();
        console.log(`Liked post: ${postId}`);
        post.liked = true;
        post.numlikes = (post.numlikes ?? 0) + 1;
      }
    } catch (error) {
      console.error('Error handling like status:', error);
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
  async openAddPostModal() {
    const modal = await this.modalController.create({
      component: NewPostComponent
    } as ModalOptions);
    await modal.present();
  }
  async openNewCommentModal(idpost: number | undefined) {
    const modal = await this.modalController.create({
      component: NewCommentComponent,
      componentProps: { postId: idpost }
    } as ModalOptions);
    await modal.present();
    const { data } = await modal.onDidDismiss();
    this.loadAllPosts();
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
  loadFollowedPosts(): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found in session storage');
      return;
    }

    this.postService.getFollowedPosts(token).subscribe(
      (followedPosts) => {
        console.log('Followed Posts:', followedPosts);
        const postIds = new Set<number>();

        // Filtramos los posts seguidos y guardamos sus IDs
        this.posts = followedPosts.filter(post => {
          const postId = post.post?.id;
          if (postId !== undefined && !postIds.has(postId)) {
            postIds.add(postId);
            return true;
          }
          return false;
        });

        // Llamadas para verificar likes y guardados
        this.posts.forEach(post => {
          const postId = post.post?.id;
          if (postId !== undefined) {
            this.postService.hasLikedPost(token, postId).subscribe(
              (hasLiked) => post.liked = hasLiked,
              (error) => console.error(`Error checking like status for post ${postId}:`, error)
            );
            this.postService.hasSavedPost(token, postId).subscribe(
              (hasSaved) => post.saved = hasSaved,
              (error) => console.error(`Error checking save status for post ${postId}:`, error)
            );
          }
        });
      },
      (error) => console.error('Error loading followed posts:', error)
    );
  }

  loadMostLikedPosts(): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found in session storage');
      return;
    }

    this.postService.getPostsWithMostLikes(token).subscribe(
      (mostLikedPosts) => {
        console.log('Most Liked Posts:', mostLikedPosts);
        this.posts = mostLikedPosts;
        this.posts.forEach(post => {
          const postId = post.post?.id;
          if (postId !== undefined) {
            this.postService.hasLikedPost(token, postId).subscribe(
              (hasLiked) => post.liked = hasLiked,
              (error) => console.error(`Error checking like status for post ${postId}:`, error)
            );
            this.postService.hasSavedPost(token, postId).subscribe(
              (hasSaved) => post.saved = hasSaved,
              (error) => console.error(`Error checking save status for post ${postId}:`, error)
            );
          }
        });
      },
      (error) => console.error('Error loading most liked posts:', error)
    );
  }


  loadMostCommentedPosts(): void {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found in session storage');
      return;
    }

    this.postService.getPostsWithMostComments(token).subscribe(
      (mostCommentedPosts) => {
        console.log('Most Commented Posts:', mostCommentedPosts);
        this.posts = mostCommentedPosts;
        this.posts.forEach(post => {
          const postId = post.post?.id;
          if (postId !== undefined) {
            this.postService.hasLikedPost(token, postId).subscribe(
              (hasLiked) => post.liked = hasLiked,
              (error) => console.error(`Error checking like status for post ${postId}:`, error)
            );
            this.postService.hasSavedPost(token, postId).subscribe(
              (hasSaved) => post.saved = hasSaved,
              (error) => console.error(`Error checking save status for post ${postId}:`, error)
            );
          }
        });
      },
      (error) => console.error('Error loading most commented posts:', error)
    );
  }
  onFilterChange(): void {
    console.log('Filtro cambiado a:', this.selectedFilter);
    this.loadPosts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedFilter'] && !changes['selectedFilter'].isFirstChange()) {
      this.loadPosts();
    }
  }

  loadPosts(): void {
    switch (this.selectedFilter) {
      case 'recientes':
        this.loadAllPosts();
        break;
      case 'mas-gustados':
        this.loadMostLikedPosts();
        break;
      case 'mas-hablados':
        this.loadMostCommentedPosts();
        break;
      case 'seguidores':
        this.loadFollowedPosts();
        break;
      default:
        this.loadAllPosts();
        break;
    }
  }
}
