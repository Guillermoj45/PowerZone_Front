import {Component, OnInit} from '@angular/core';
import {IonicModule, ModalController, ModalOptions} from "@ionic/angular";
import {addIcons} from "ionicons";
import {
    add,
    closeCircle,
    home,
    logInOutline,
    logoIonitron,
    notifications,
    paperPlaneOutline,
    personCircleOutline,
    restaurant,
    search,
    settingsSharp
} from "ionicons/icons";
import {Router} from "@angular/router";
import {NewPostComponent} from "../new-post/new-post.component";
import {Menu} from "../../Service/Menu.service";
import {ProfileSetting} from "../../Models/ProfileSetting";
import {ProfileSettingsService} from "../../Service/profile-settings.service";

@Component({
    selector: 'app-menuoriginal',
    templateUrl: './menuoriginal.component.html',
    styleUrls: ['./menuoriginal.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
    ]
})
export class MenuoriginalComponent implements OnInit {

    profile: ProfileSetting = {
        nickName: '',
        name: '',
        email: '',
        bornDate: '',
        avatar: '',
        id: 0
    };

    constructor(private modalController: ModalController,
                private router: Router,
                private menuService: Menu,
                private profileSettings: ProfileSettingsService) {
        addIcons({
            home,
            search,
            add,
            restaurant,
            notifications,
            closeCircle,
            personCircleOutline,
            settingsSharp,
            logInOutline,
            paperPlaneOutline,
            logoIonitron

        });
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

    ngOnInit() {
        const token = sessionStorage.getItem('token');
        if (token) {
            this.profileSettings.getData(token).subscribe((data: ProfileSetting) => {
                this.profile = data;
            });
        } else {
            console.error('Token is null');
        }
    }


    navigateTo(path: string) {
        this.router.navigate([path]);
    }

    LogOut() {
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
    }
}
