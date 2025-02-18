import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class MenuSuggestionsService {
    private menuVisible = new BehaviorSubject<boolean>(true);
    private suggestionsVisible = new BehaviorSubject<boolean>(true);

    // Observables para los estados
    menuVisible$ = this.menuVisible.asObservable();
    suggestionsVisible$ = this.suggestionsVisible.asObservable();

    // Métodos para cambiar la visibilidad
    setMenuVisible(visible: boolean) {
        this.menuVisible.next(visible);
    }

    setSuggestionsVisible(visible: boolean) {
        this.suggestionsVisible.next(visible);
    }
}
