import { Component, OnInit } from '@angular/core';
import {IonicModule} from "@ionic/angular";
import { addIcons } from "ionicons";
import { home, search, add, restaurant, notifications, closeCircle } from "ionicons/icons";
import {Router} from "@angular/router";
import {SearchComponent} from "../../search/search.component";
import { SearchVisibilityService } from '../../Service/search-visibility';
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

    constructor(private router: Router, private searchVisibilityService: SearchVisibilityService) {
        addIcons({ home, search, add, restaurant, notifications, closeCircle });
    }

  ngOnInit() {}

    toggleSearch() {
        this.searchVisibilityService.toggleSearchVisibility();
    }
    navigateTo(path: string) {
        this.router.navigate([path]);
    }
}
