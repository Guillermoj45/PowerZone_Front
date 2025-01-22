import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-post-details',
    templateUrl: './post-details.component.html',
    styleUrls: ['./post-details.component.scss'],
    standalone: true,
    imports: [CommonModule, IonicModule]
})
export class PostDetailsComponent implements OnInit {
  post: any;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.post = history.state.post;
  }


}
