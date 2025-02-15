import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class Menu {
    private useAlternateMenuSubject = new BehaviorSubject<boolean>(false);
    useAlternateMenu$ = this.useAlternateMenuSubject.asObservable();

    toggleMenu() {
        this.useAlternateMenuSubject.next(true);
    }
}
