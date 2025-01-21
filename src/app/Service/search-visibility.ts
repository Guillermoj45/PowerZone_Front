import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchVisibilityService {
    private searchVisibilitySubject = new BehaviorSubject<boolean>(false);
    searchVisibility$ = this.searchVisibilitySubject.asObservable();

    toggleSearchVisibility() {
        this.searchVisibilitySubject.next(!this.searchVisibilitySubject.value);
    }
}
