import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { addIcons } from "ionicons";
import { closeCircle, personAddOutline } from "ionicons/icons";
import {AdminService} from "../../Service/Admin.service";
import {ProfileService} from "../../Service/profile.service";
import {AuthService} from "../../Service/auth.service";


@Component({
    selector: 'app-suggestions',
    templateUrl: './suggestions.component.html',
    styleUrls: ['./suggestions.component.scss'],
    standalone: true,
    imports: [
        IonicModule
    ]
})
export class SuggestionsComponent  implements OnInit {

    constructor(
      private adminService: AdminService,
      private profileService: ProfileService,
      private authService: AuthService
    ) {
        addIcons({closeCircle, personAddOutline });
    }

  ngOnInit() {}

    protected readonly screen = screen;

  screenAdmin() {
  }
}
