// src/app/shepherd.service.ts
import {Injectable} from '@angular/core';
import Shepherd from "shepherd.js";


@Injectable({
    providedIn: 'root'
})
export class ShepherdService {
    private tour: Shepherd.Tour;

    constructor() {
        this.tour = new Shepherd.Tour({
            defaultStepOptions: {
                scrollTo: true
            }
        });
    }

    // Other methods to control the tour
}
