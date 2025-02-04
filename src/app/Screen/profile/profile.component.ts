import { Component, OnInit } from '@angular/core';
import {InfiniteScrollCustomEvent, IonicModule} from "@ionic/angular";
import {Router, ActivatedRoute, RouterModule} from "@angular/router";
import { ProfileSettingsService } from '../../Service/profile-settings.service';
import { ProfileSetting } from '../../Models/ProfileSetting';
import { PostService } from '../../Service/Post.service';
import { Post } from '../../Models/Post';
import {NgForOf, NgIf} from "@angular/common";
import {bookmark, bookmarkOutline, chatbubble, heart, heartOutline, sendSharp, shareSocial} from 'ionicons/icons';
import {addIcons} from "ionicons";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
    imports: [
        IonicModule,
        NgIf, RouterModule, NgForOf
    ],
    standalone: true
})
export class ProfileComponent implements OnInit {

    showButton: boolean = false;
    items: string[] = [];
    isHeaderHidden = false;
    private lastScrollTop = 0;
    profileId: string | null = null;
    posts: Post[] = [];
    profile: ProfileSetting = {
        nickName: '',
        name: '',
        email: '',
        bornDate: '',
        avatar: ''
    };

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private profileSettings: ProfileSettingsService,
        private postService: PostService
    ) {
        addIcons({  bookmark, sendSharp });
    }

    ngOnInit() {
        this.checkRoute();
        this.profileId = this.route.snapshot.paramMap.get('id');

        if (this.profileId) {
            this.profileSettings.getProfileById(this.profileId).subscribe(
                (data: ProfileSetting) => {
                    this.profile = data;
                    console.log('Loaded profile by ID:', this.profile);
                },
                (error) => {
                    console.error('Error retrieving profile by ID:', error);
                }
            );
            this.loadPostsByUserId(this.profileId);
        } else {
            const token = sessionStorage.getItem('token');
            if (token) {
                this.profileSettings.getData(token).subscribe(
                    (data: ProfileSetting) => {
                        this.profile = data;
                        console.log('Profile data loaded:', this.profile);
                    },
                    (error) => {
                        console.error('Error retrieving profile data:', error);
                    }
                );
                this.loadPostsByCurrentUser(token);
            } else {
                console.error('Token is null');
            }
        }
    }

    checkRoute() {
        const urlSegments = this.router.url.split('/');
        this.showButton = !(urlSegments.length === 2 && urlSegments[1] === 'profile');
    }

    loadPostsByUserId(userId: string) {
        const token = sessionStorage.getItem('token');
        if (token) {
            this.postService.getUserPostsById(token, userId).subscribe(
                (data: Post[]) => {
                    this.posts = data;
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

    loadPostsByCurrentUser(token: string) {
        this.postService.getUserPosts(token).subscribe(
            (data: Post[]) => {
                this.posts = data;
                console.log('Loaded posts for current user:', this.posts);
            },
            (error) => {
                console.error('Error retrieving posts for current user:', error);
                this.posts = [];
            }
        );
    }

    navigateTo(path: string) {
        this.router.navigate([path]);
    }

    onIonInfinite(event: InfiniteScrollCustomEvent) {
        this.generateItems();
        setTimeout(() => {
            event.target.complete();
        }, 500);
    }

    private generateItems() {
        const count = this.items.length + 1;
        for (let i = 0; i < 50; i++) {
            this.items.push(`Item ${count + i}`);
        }
    }

    onScroll(event: any) {
        const scrollTop = event.detail.scrollTop;
        this.isHeaderHidden = scrollTop > this.lastScrollTop && scrollTop > 100;
        this.lastScrollTop = scrollTop;
    }
}
