import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    FormsModule,
    NgForOf
  ]
})
export class SearchComponent  implements OnInit {
    searchText: string = '';
  constructor() { }

  ngOnInit() {}

  users = [
    {
      name: 'Sara',
      avatar: 'https://picsum.photos/200/300?random=1'
    },
    {
      name: 'Rufaé',
      avatar: 'https://picsum.photos/200/300?random=2'
    },
    {
      name: 'Guillermo',
      avatar: 'https://picsum.photos/200/300?random=3'
    }
  ];
  removeUser(user: any) {
    this.users = this.users.filter(u => u !== user);
  }
}
