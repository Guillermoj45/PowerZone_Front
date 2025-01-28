import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {PostDetails} from "../../Models/Post-details";
import {addIcons} from "ionicons";
import {bookmark, chatbubble, heart, shareSocial} from "ionicons/icons";

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
    standalone: true,
    imports: [CommonModule, IonicModule]
})
export class PostDetailsComponent implements OnInit {
  post: PostDetails = new PostDetails();

  constructor(private route: ActivatedRoute) {
    addIcons({heart, chatbubble, bookmark,shareSocial})
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idPost:number = parseInt(params.get('id') || '0', 10);
    });
    this.post.id = 1;
    this.post.decription = 'This is a post'
    this.post.image = 'https://picsum.photos/1000/1000?random=4';
    this.post.likes = 10;
    this.post.numComments = 1;
    this.post.profile.name = 'John Doe';
    this.post.profile.avatar = 'https://picsum.photos/1000/1000?random=1';

    this.post.comments.push({
      profile: {
        name: 'John Doe',
        avatar: 'https://picsum.photos/1000/1000?random=2'
      },
      comment: 'Nice post'
    });

    this.post.comments.push({
      profile: {
        name: 'Jane Doe',
        avatar: 'https://picsum.photos/1000/1000?random=3'
      },
      comment: 'Nice post'
    })

    console.log(this.post);
  }


}
