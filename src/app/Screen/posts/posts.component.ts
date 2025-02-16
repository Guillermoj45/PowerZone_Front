import {Component, OnInit, SimpleChanges} from '@angular/core';
import {IonicModule, ModalController, ModalOptions, ToastController} from '@ionic/angular';
import {CommonModule, NgForOf} from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';
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
import {PostService} from '../../Service/Post.service';
import {PostDto} from '../../Models/PostDto';
import {NewCommentComponent} from '../new-comment/new-comment.component';
import {start} from "@popperjs/core";
import {ProfileService} from "../../Service/profile.service";
import {FormsModule} from "@angular/forms";
import {AdminService} from "../../Service/Admin.service";
import {TutorialService} from "../../Service/tutorial.service";
import {NewPostComponent} from "../new-post/new-post.component";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {CommentDetails} from "../../Models/CommentDetails";
import {CommentService} from "../../Service/Comment.service";


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
  users: any[] = [];
  searchQuery: string = '';
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
    private sanitizer: DomSanitizer,
    private commentService: CommentService
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
            }, 3500);


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


  async loadAllPosts() {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found in session storage');
      return;
    }


    try {
      const posts = await this.postService.getAllPosts(token).toPromise();
      this.posts = posts || [];
      for (const post of this.posts) {
        const postId = post.post?.id;
        if (postId !== undefined) {
          post.liked = await this.postService.hasLikedPost(token, postId).toPromise();
          post.saved = await this.postService.hasSavedPost(token, postId).toPromise();
        }
      }
    } catch (error) {
      console.error('Error fetching all posts:', error);
    }
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


  //TODO: Cambiar a un modal
  async openNewCommentModal(idpost: number | undefined, post: PostDto) {
    const modal = await this.modalController.create({
      component: NewCommentComponent,
      componentProps: { postId: idpost }
    } as ModalOptions);
    await modal.present();
    await modal.onDidDismiss();


    // Increment the number of comments by 1
    post.numcomments = (post.numcomments ?? 0) + 1;
    this.loadComments(post);
  }
  async loadComments(post: PostDto) {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found in session storage');
      return;
    }


    try {
      const postId = post.post?.id;
      if (postId === undefined) {
        console.error('Post ID not found');
        return;
      }


      const comments = await this.commentService.getCommentsByPostId(token, postId).toPromise();
      if (comments) {
        post.numcomments = comments.length;
        if (comments.length > 0) {
          const firstComment: CommentDetails = comments[0];
          post.avatarcomment = firstComment.avatar;
          post.nicknamecomment = firstComment.nickname;
          post.firstcomment = firstComment.content;
        }
      }
    } catch (error) {
      console.error('Error loading comments:', error);
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


  async loadMostLikedPosts(): Promise<void> {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found in session storage');
      return;
    }


    try {
      const mostLikedPosts = await this.postService.getPostsWithMostLikes(token).toPromise();
      const allPosts = await this.postService.getAllPosts(token).toPromise();


      if (!mostLikedPosts || !allPosts) {
        console.error('Error: mostLikedPosts or allPosts is undefined');
        return;
      }


      const postIds = new Set<number>();
      const combinedPosts = [...mostLikedPosts, ...allPosts].filter(post => {
        const postId = post.post?.id;
        if (postId !== undefined && !postIds.has(postId)) {
          postIds.add(postId);
          return true;
        }
        return false;
      });


      this.posts = combinedPosts.sort((a, b) => (b.numlikes ?? 0) - (a.numlikes ?? 0));


      for (const post of this.posts) {
        const postId = post.post?.id;
        if (postId !== undefined) {
          post.liked = await this.postService.hasLikedPost(token, postId).toPromise();
          post.saved = await this.postService.hasSavedPost(token, postId).toPromise();
        }
      }
    } catch (error) {
      console.error('Error loading posts:', error);
    }
  }


  async loadMostCommentedPosts(): Promise<void> {
    const token = sessionStorage.getItem('token');
    if (!token) {
      console.error('No token found in session storage');
      return;
    }


    try {
      const mostCommentedPosts = await this.postService.getPostsWithMostComments(token).toPromise();
      const allPosts = await this.postService.getAllPosts(token).toPromise();


      if (!mostCommentedPosts || !allPosts) {
        console.error('Error: mostCommentedPosts or allPosts is undefined');
        return;
      }


      const postIds = new Set<number>();
      const combinedPosts = [...mostCommentedPosts, ...allPosts].filter(post => {
        const postId = post.post?.id;
        if (postId !== undefined && !postIds.has(postId)) {
          postIds.add(postId);
          return true;
        }
        return false;
      });


      this.posts = combinedPosts.sort((a, b) => (b.numcomments ?? 0) - (a.numcomments ?? 0));


      for (const post of this.posts) {
        const postId = post.post?.id;
        if (postId !== undefined) {
          post.liked = await this.postService.hasLikedPost(token, postId).toPromise();
          post.saved = await this.postService.hasSavedPost(token, postId).toPromise();
        }
      }
    } catch (error) {
      console.error('Error loading posts:', error);
    }
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
        this.posts = followedPosts.filter(post => {
          const postId = post.post?.id;
          if (postId !== undefined && !postIds.has(postId)) {
            postIds.add(postId);
            return true;
          }
          return false;
        });
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
  onFilterChange(): void {
    console.log('Filtro cambiado a:', this.selectedFilter);
    this.loadPosts();
  }


  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedFilter'] && !changes['selectedFilter'].isFirstChange()) {
      this.loadPosts();
    }
  }
  filterPostsByPattern(): void {
    if (this.searchQuery.trim() === '' || !this.searchQuery.includes('#')) {
      this.loadPosts();
      return;
    }

    this.postService.getPostsByPattern(this.searchQuery).subscribe(
      (data: PostDto[]) => {
        this.posts = data.filter(post => post.post?.content && post.post.content.includes(this.searchQuery));
      },
      (error) => {
        console.error('Error filtering posts by pattern:', error);
      }
    );
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
    onSearchChange() {
        if (this.searchQuery.trim().length > 0) {
            if (this.searchQuery.startsWith('#')) {
                this.filterPostsByPattern();
            } else {
                this.profile.searchProfiles(this.searchQuery).subscribe((data) => {
                    if (data.length > 0) {
                        this.loadPostsByUser(data[0].id);
                    } else {
                        this.users = [];
                        this.loadPosts();
                    }
                });
            }
        } else {
            this.users = [];
            this.loadPosts();
        }
    }

    loadPostsByUser(userId: string): void {
        const token = sessionStorage.getItem('token') || '';
        this.postService.getUserPostsById(token, userId).subscribe(
            (data: PostDto[]) => {
                this.posts = data;
            },
            (error) => {
                console.error('Error loading posts by user:', error);
            }
        );
    }
}

