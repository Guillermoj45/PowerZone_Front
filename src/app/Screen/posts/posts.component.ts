import { Component, OnInit } from '@angular/core';
import {IonicModule, ModalController} from "@ionic/angular";
import {CommonModule, NgForOf, NgOptimizedImage} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {bookmark, chatbubble, heart, shareSocial} from "ionicons/icons";
import {SearchComponent} from "../../Component/search/search.component";
import {FormsModule} from "@angular/forms";
import {SearchVisibilityService} from "../../Service/search-visibility";
import {NewPostComponent} from "../../new-post/new-post.component";


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
        SearchComponent,
        FormsModule,


    ]
})
export class PostsComponent implements OnInit {

    searchText: string = '';
    showSearch: boolean = false;
    viewPostDetails(post: any) {
        this.router.navigate(['/post-details'], { state: { post } });
    }
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


    constructor(private router: Router, private searchVisibilityService: SearchVisibilityService) {
        addIcons({ bookmark, heart, chatbubble, shareSocial });
    }

    ngOnInit(): void {
        this.searchVisibilityService.searchVisibility$.subscribe(visible => {
            this.showSearch = visible;
        });
    }
  likePost(post: any) {
    console.log(`Liked post: ${post.username}`);
  }
}
