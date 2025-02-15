import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {addIcons} from "ionicons";
import {closeCircle, personAddOutline, personRemoveOutline} from "ionicons/icons";
import {ProfileTotal} from "../../Models/ProfileTotal";
import {NgForOf, NgIf} from "@angular/common";
import {ProfileSettingsService} from "../../Service/profile-settings.service";
import {Router} from "@angular/router";
import {AdminService} from "../../Service/Admin.service";
import {AuthService} from "../../Service/auth.service";
import {ProfileService} from "../../Service/profile.service";


@Component({
    selector: 'app-suggestions',
    templateUrl: './suggestions.component.html',
    styleUrls: ['./suggestions.component.scss'],
    standalone: true,
  imports: [
    IonicModule,
    NgForOf,
    NgIf
  ]
})
export class SuggestionsComponent  implements OnInit {
    profiles:ProfileTotal[] = []
    constructor(
      private profileService: ProfileService,
      private profileSettings: ProfileSettingsService,
      private router: Router,
      private adminService: AdminService,
      private authService: AuthService
    ) {
        addIcons({closeCircle, personAddOutline, personRemoveOutline});
    }

  ngOnInit() {
    this.getRecomendations();

  }

  getRecomendations() {
    this.profileService.getRecomendations().subscribe({
      next: (data: ProfileTotal[]) => {
        this.profiles = data;
        console.log(this.profiles);
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }


  followUser(profile: ProfileTotal) {
      let token = sessionStorage.getItem('token') || '';
      this.profileSettings.followUser(token, 1, profile.id).subscribe({
        next: (data: string) => {
          console.log(data);
          profile.seguido = true;
        },
        error: (err: any) => {
          console.error(err);
        }
      });
  }
  navigateToProfile(profileId: number) {
    this.router.navigate(['/profile/', profileId]);
}

    protected readonly screen = screen;

  screenAdmin() {
    this.adminService.verifyAdmin().subscribe({
      next: (data: boolean) => {
        if (data == true) {
          this.router.navigate(['/admin']);
        }
      },
      error: (err: any) => {
        console.error(err);
    }
    });
  }
  unfollowUser(profile: ProfileTotal) {
    let token = sessionStorage.getItem('token') || '';
    console.log("token", token);
    this.profileSettings.unfollowUser(token, 1, profile.id).subscribe({
      next: (data: string) => {
        console.log(data);
        profile.seguido = false;
      },
      error: (err: any) => {
        console.error(err);
      }
    });
  }
}
