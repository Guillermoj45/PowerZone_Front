import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule, NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {addIcons} from "ionicons";
import {bookmark, chatbubble, heart, shareSocial} from "ionicons/icons";
import {PostService} from '../../Service/Post.service';
import {Post} from '../../Models/Post';

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
    posts: Post[] = [];

    constructor(private router: Router, private postService: PostService) {
        addIcons({ bookmark, heart, chatbubble, shareSocial });
    }

    ngOnInit(): void {
        this.loadBestPosts();
    }

    loadBestPosts() {
        this.postService.getBestPost().subscribe(
            (posts) => {
                this.posts = posts;
            },
            (error) => {
                console.error('Error fetching best posts:', error);
            }
        );
    }

    viewPostDetails(post: Post) {
        this.router.navigate(['/post-details'], { state: { post } });
    }

    likePost(post: Post) {
        console.log(`Liked post: ${post.content}`);
    }
}
