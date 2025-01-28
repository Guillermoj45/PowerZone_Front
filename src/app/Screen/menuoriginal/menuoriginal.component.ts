import { Component, OnInit } from '@angular/core';
import {IonicModule, ModalController, ModalOptions} from "@ionic/angular";
import { addIcons } from "ionicons";
import { home, search, add, restaurant, notifications, closeCircle, personCircleOutline, settingsSharp } from "ionicons/icons";
import {Router} from "@angular/router";
import {SearchComponent} from "../search/search.component";

import {NewPostComponent} from "../new-post/new-post.component";
import {NgIf} from "@angular/common";
import {Menu} from "../../Service/Menu.service";

@Component({
    selector: 'app-menuoriginal',
    templateUrl: './menuoriginal.component.html',
    styleUrls: ['./menuoriginal.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
    ]
})
export class MenuoriginalComponent  implements OnInit {

    constructor(private modalController: ModalController,
                private router: Router,

                private menuService: Menu) {
        addIcons({ home, search, add, restaurant, notifications, closeCircle, personCircleOutline, settingsSharp });
    }

    toggleMenu() {
        this.menuService.toggleMenu();
    }

    async openAddPostModal() {
        const modal = await this.modalController.create({
            component: NewPostComponent
        } as ModalOptions);
        await modal.present();
    }

  ngOnInit() {}


    navigateTo(path: string) {
        this.router.navigate([path]);
    }
}
