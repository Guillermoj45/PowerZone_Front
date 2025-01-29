import { Component, OnInit } from '@angular/core';
import {IonicModule, ModalController, ModalOptions} from '@ionic/angular';
import { CommonModule, NgForOf } from '@angular/common';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { bookmark, chatbubble, heart, shareSocial } from 'ionicons/icons';
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

    constructor(private router: Router, private postService: PostService, private modalController: ModalController) {
        addIcons({ bookmark, heart, chatbubble, shareSocial });
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

        if (!post.post) {
            console.error('Post data not found');
            return;
        }

        this.postService.likePost(token, post.post.id).subscribe(
            (response) => {
                console.log(`Liked post: ${post.post?.id}`);
            },
            (error) => {
                console.error('Error liking the post:', error);
            }
        );
    }

    savePost(post: PostDto) {
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

        this.postService.savePost(token, postId).subscribe(
            (response) => {
                console.log(`Saved post: ${postId}`);
            },
            (error) => {
                console.error('Error saving the post:', error);
            }
        );
    }

    async openNewCommentModal() {
        const modal = await this.modalController.create({
            component: NewCommentComponent
        } as ModalOptions);
        await modal.present();
    }


}
