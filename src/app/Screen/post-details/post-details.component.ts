import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {Post} from "../../Models/Post";
import {addIcons} from "ionicons";
import {bookmark, chatbubble, heart, shareSocial} from "ionicons/icons";
import {PublicationComponent} from "./publication/publication.component";
import {PostDetails} from "../../Models/PostDetails";

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
    standalone: true,
  imports: [CommonModule, IonicModule, PublicationComponent]
})
export class PostDetailsComponent implements OnInit {
  posts: PostDetails[] = [];

  constructor(private route: ActivatedRoute) {
    addIcons({heart, chatbubble, bookmark,shareSocial})
  }

  ngOnInit(): void {
    let post: PostDetails = new PostDetails();
    this.route.paramMap.subscribe(params => {
      let idPost:number = parseInt(params.get('id') || '0', 10);
      post.id = idPost;
      console.log('Con id', this.posts);
    });
    post.decription = 'This is a post'
    post.image = 'https://picsum.photos/2000/1000?random=4';
    post.likes = 10;
    post.numComments = 1;
    post.profile.name = 'John Doe';
    post.profile.avatar = 'https://picsum.photos/1000/1000?random=1';

    post.comments.push({
      profile: {
        name: 'John Doe',
        avatar: 'https://picsum.photos/1000/1000?random=2'
      },
      comment: 'Nice post'
    });

    post.comments.push({
      profile: {
        name: 'Jane Doe',
        avatar: 'https://picsum.photos/1000/1000?random=3'
      },
      comment: 'Nice post'
    })
    this.posts.push(post);

    let post2 = new PostDetails();
    post2.id = 2;
    post2.decription = 'This is a post'
    post2.image = 'https://picsum.photos/2000/1000?random=4';
    post2.likes = 10;
    post2.numComments = 1;
    post2.profile.name = 'John Doe2';
    post2.profile.avatar = 'https://picsum.photos/1000/1000?random=1';

    post2.comments.push({
      profile: {
        name: 'John Doe2',
        avatar: 'https://picsum.photos/1000/1000?random=2'
      },
      comment: 'Nice post'
    });
        post2.comments.push({
      profile: {
        name: 'John Doe2',
        avatar: 'https://picsum.photos/1000/1000?random=2'
      },
      comment: 'Nice post'
    });

    post2.comments.push({
      profile: {
        name: 'Jane Doe',
        avatar: 'https://picsum.photos/1000/1000?random=3'
      },
      comment: 'Nice post'
    })
    this.posts.push(post2);
    console.log(this.posts);
  }
}
