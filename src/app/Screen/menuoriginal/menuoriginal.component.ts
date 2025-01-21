import { Component, OnInit } from '@angular/core';
import {IonicModule, ModalController, ModalOptions} from "@ionic/angular";
import { addIcons } from "ionicons";
import { home, search, add, restaurant, notifications, closeCircle } from "ionicons/icons";
import {Router} from "@angular/router";
import {SearchComponent} from "../../Component/search/search.component";
import { SearchVisibilityService } from '../../Service/search-visibility';
import {NewPostComponent} from "../../new-post/new-post.component";

@Component({
    selector: 'app-menuoriginal',
    templateUrl: './menuoriginal.component.html',
    styleUrls: ['./menuoriginal.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        SearchComponent
    ]
})
export class MenuoriginalComponent  implements OnInit {
    showSearch: any;

    constructor(private modalController: ModalController, private router: Router, private searchVisibilityService: SearchVisibilityService) {
        addIcons({ home, search, add, restaurant, notifications, closeCircle });
    }
    async openAddPostModal() {
        const modal = await this.modalController.create({
            component: NewPostComponent
        } as ModalOptions);
        await modal.present();
    }
  ngOnInit() {}

    toggleSearch() {
        this.searchVisibilityService.toggleSearchVisibility();
    }
    navigateTo(path: string) {
        this.router.navigate([path]);
    }
}
