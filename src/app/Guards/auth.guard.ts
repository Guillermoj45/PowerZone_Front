import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {MenuSuggestionsService} from "../Service/menusuggestionsService.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private menuSuggestionsService: MenuSuggestionsService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const token = sessionStorage.getItem('token');

        if (token) {
            return true;
        } else {
            // Hide the menus before redirecting
            this.menuSuggestionsService.setMenuVisible(false);
            this.menuSuggestionsService.setSuggestionsVisible(false);

            // Redirect to the login page with query parameters
            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url, fromShare: true } });

            return false;
        }
    }
}
