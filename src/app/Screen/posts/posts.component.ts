import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule, NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {addIcons} from "ionicons";
import {bookmark, chatbubble, heart, shareSocial} from "ionicons/icons";
import {PostService} from '../../Service/Post.service';
import {Post} from '../../Models/Post';
import { PostDto } from '../../Models/PostDto';
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

    constructor(private router: Router, private postService: PostService) {
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
}
