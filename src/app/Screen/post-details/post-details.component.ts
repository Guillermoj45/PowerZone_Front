import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import {Post} from "../../Models/Post";

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
    standalone: true,
    imports: [CommonModule, IonicModule]
})
export class PostDetailsComponent implements OnInit {
  post: Post = new Post();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let idPost:number = parseInt(params.get('id') || '0', 10);
    });
    console.log(this.post);
  }


}
