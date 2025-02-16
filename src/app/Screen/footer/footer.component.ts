import {Component, OnInit} from '@angular/core';
import {IonicModule, ModalController, ModalOptions} from "@ionic/angular";
import {
    add,
    closeCircle,
    home,
    notifications,
    paperPlaneOutline,
    personCircleOutline,
    restaurant,
    search
} from "ionicons/icons";
import {addIcons} from "ionicons";
import {Router} from "@angular/router";
import {NewPostComponent} from "../new-post/new-post.component";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class FooterComponent  implements OnInit {

    constructor(private router: Router,
                private modalController: ModalController,) {
        addIcons({ home, search, add, restaurant, notifications, closeCircle, personCircleOutline, paperPlaneOutline });
    }

  ngOnInit() {}

    goToUrl(url:String) {
        this.router.navigate([url]);
    }

    async openAddPostModal() {
        const modal = await this.modalController.create({
            component: NewPostComponent
        } as ModalOptions);
        await modal.present();
    }

}
