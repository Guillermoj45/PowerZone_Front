import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {CommonModule, NgForOf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {bookmark, chatbubble, heart, shareSocial} from "ionicons/icons";



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgForOf,
    CommonModule,
    NgOptimizedImage,
    RouterLink,


  ]
})
export class PostsComponent implements OnInit {
  posts = [
    {
      id: 1,
      username: 'Sara',
      userAvatar: 'https://picsum.photos/100/100?random=1',
      image: 'https://picsum.photos/800/400?random=1',
      description: 'Aquí con mi gymster',
      likes: '10mil',
      comments: '10mil',
      highlightedComment: {
        username: 'Susanita',
        avatar: 'https://picsum.photos/100/100?random=2',
        content: 'Que wupas salimos amiga',
      },
    },
    {
      id: 2,
      username: 'Carlos',
      userAvatar: 'https://picsum.photos/100/100?random=3',
      image: 'https://picsum.photos/800/400?random=2',
      description: 'Día de entrenamiento intensivo 💪',
      likes: '8mil',
      comments: '5mil',
      highlightedComment: {
        username: 'Pedro',
        avatar: 'https://picsum.photos/100/100?random=4',
        content: '¡Increíble esfuerzo, bro!',
      },
    },
    {
      id: 3,
      username: 'Ana',
      userAvatar: 'https://picsum.photos/100/100?random=5',
      image: 'https://picsum.photos/800/400?random=3',
      description: 'Relax después de un gran día',
      likes: '7mil',
      comments: '3mil',
      highlightedComment: {
        username: 'Lucía',
        avatar: 'https://picsum.photos/100/100?random=6',
        content: '¡Qué hermosa vista! ❤️',
      },
    },
  ];

  constructor() {

      addIcons({ bookmark, heart, chatbubble, shareSocial });
  }

  ngOnInit(): void {}

  likePost(post: any) {
    console.log(`Liked post: ${post.username}`);
  }
}
